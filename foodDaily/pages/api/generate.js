import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }

  const dietary_requirements = req.body.dietary_requirements || '';
  if (dietary_requirements.length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid dietary requirement",
      }
    });
    return;
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(dietary_requirements),
      temperature: 0.6,
      max_tokens: 2048,
    });
    res.status(200).json({ result: completion.data.choices[0].text });
  } catch(error) {
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}

function generatePrompt(dietary_requirements) {
  return `Suggest a meal plan for a specific dietary requirements.
Information about the person and dietary requirements: 23 female loose fat Vegan wheat Japanese halal
Meal Plan: A 23 year old female who wants to loose fate and is restricted to Vegan diet, is allergic to wheat, likes Japanese
food, and has other requirements of halal should follow this meal plan: 
Breakfast:
Tofu scramble with mixed vegetables (such as bell peppers, onions, and spinach), cooked in olive oil
Sliced avocado
Black coffee or tea
Lunch:
Vegetable sushi rolls (with avocado, cucumber, carrot, and/or sweet potato), served with gluten-free soy sauce or tamari
Edamame
Side salad with mixed greens, cherry tomatoes, and a light vinaigrette dressing
Dinner:
Grilled tempeh or tofu with sautéed bok choy and shiitake mushrooms, seasoned with gluten-free soy sauce or tamari
Quinoa or brown rice
Miso soup (with halal ingredients)
Information about the person and dietary requirements: ${dietary_requirements}
Meal Plan:`;
}