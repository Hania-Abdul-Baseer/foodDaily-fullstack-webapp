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
  if (dietary_requirements.trim().length === 0) {
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
    // Consider adjusting the error handling logic for your use case
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

Dietary Requirement: Vegan
Meal Plan: Breakfast:

Overnight oats with chia seeds, almond milk, and berries
Smoothie bowl with frozen fruit, almond milk, and vegan protein powder
Tofu scramble with spinach and avocado on whole grain toast
Lunch:

Quinoa salad with roasted vegetables and a tahini dressing
Vegan lentil soup with whole grain crackers
Roasted vegetable wrap with hummus and avocado
Dinner:

Brown rice and vegetable stir-fry with tofu or tempeh
Vegan chili with quinoa and avocado
Lentil and vegetable curry with brown rice
Snacks:

Apple slices with almond butter
Hummus and vegetable sticks
Vegan protein bar

Dietary Requirement: ${dietary_requirements}
Meal Plan:`;
}
