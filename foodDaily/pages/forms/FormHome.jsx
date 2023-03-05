import { useState } from "react";
import Title from '../result/Title'
import Feed from '../result/Feed'
import Types from '../result/Types'
import breakfast from '../result/assets/breakfast.svg'
import lunch from '../result/assets/lunch.svg'
import dinner from '../result/assets/dinner.svg'
import style from '../result/result.module.css'
// Components
import { Form } from "../forms/Form";

// Functions
import { useMultiStepForm } from "../hooks/useMultiStepForm";

// Styling
import styles from "./formhome.module.css";

export function FormHome() {
  const [dietaryRequirementsInput, setDietaryRequirementsInput] = useState("");
  const [result, setResult] = useState();

  async function onFinalSubmit() {
    const dietaryRequirements =
      data.age +
      " " +
      data.gender +
      " " +
      data.goals +
      " " +
      data.dietartyRestrictions +
      " " +
      data.foodAllergies +
      " " +
      data.favouriteCuisine +
      " " +
      data.otherRequirements;
    setDietaryRequirementsInput(dietaryRequirements);
    console.log("dietaryrequirements:" + dietaryRequirementsInput);

    try {
      const response = await fetch("../api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          dietary_requirements: dietaryRequirementsInput,
        }),
      });

      const inputData = await response.json();
      if (response.status !== 200) {
        throw (
          inputData.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }

      setResult(inputData.result);
      setDietaryRequirementsInput("");
    } catch (error) {
      console.error(error);
    }
  }

  //  VARIABLES
  const INITIAL_DATA = {
    name: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    physicalActivity: "",
    goals: "",
    dietartyRestrictions: "",
    foodAllergies: "",
    favouriteCuisine: "",
    mealPreparationTime: "",
    budget: "",
    otherRequirements: "",
  };

  const currentPhysicalActivity = [
    { current: "Sedentary" },
    { current: "Lightly Active" },
    { current: "Moderately Active" },
    { current: "Very Active" },
  ];

  const currentGoals = [
    { goal: "Gain Muscle" },
    { goal: "Loose Fat" },
    { goal: "Maintain Weight" },
  ];

  const restrictions = [
    { name: "None" },
    { name: "Vegan" },
    { name: "Paleo" },
    { name: "Dukan" },
    { name: "Vegetarian" },
    { name: "Atkins" },
    { name: "Intermittent Fasting" },
    { name: "Halal" },
    { name: "Kosher" },
  ];

  const allergens = [
    { name: "None" },
    { name: "Gluten" },
    { name: "Dairy" },
    { name: "Egg" },
    { name: "Soy" },
    { name: "Peanut" },
    { name: "Wheat" },
    { name: "Milk" },
    { name: "Fish" },
  ];

  const cuisineFlavours = [
    { name: "Italian" },
    { name: "Chinese" },
    { name: "Indian" },
    { name: "Mexican" },
    { name: "Japanese" },
    { name: "Thai" },
    { name: "Spicy" },
    { name: "Sweet" },
    { name: "Savoury" },
  ];

  const availableTime = [
    { time: "Less than 15 minutes" },
    { time: "15-30 minutes" },
    { time: "30 minutes to 1 hour" },
    { time: "More than 2 hours" },
  ];

  //   USE STATE(S)
  const [data, setData] = useState(INITIAL_DATA);
  console.log(data);

  //   FUNCTIONS
  function updateFields(fields) {
    setData((prev) => ({ ...prev, ...fields }));
  }

  function onSubmitForm(e) {
    e.preventDefault();
    !isLastStep ? nextStep() : onFinalSubmit();
  }

  const {
    step,
    steps,
    currentStepIndex,
    isFirstStep,
    isLastStep,
    prevStep,
    nextStep,
  } = useMultiStepForm([
    <Form title="What should we call you?">
      <input
        type="text"
        required
        value={data.name}
        className={styles.form_text_input}
        onChange={(e) => updateFields({ name: e.target.value })}
      />
    </Form>,
    <Form title="What is your age?">
      <input
        type="number"
        required
        min={1}
        value={data.age}
        className={styles.form_text_input}
        onChange={(e) => updateFields({ age: e.target.value })}
      />
    </Form>,
    <Form title="What is your gender?">
      <label className={styles.form_label}>
        <input
          className={styles.form_label_radio}
          type="radio"
          name="gender"
          value="Male"
          checked={data.gender === "Male"}
          onClick={(e) => updateFields({ gender: e.target.value })}
          required
        />
        Male
      </label>
      <label className={styles.form_label}>
        <input
          className={styles.form_label_radio}
          type="radio"
          name="gender"
          value="Female"
          checked={data.gender === "Female"}
          onClick={(e) => updateFields({ gender: e.target.value })}
          required
        />
        Female
      </label>
    </Form>,
    <Form title="What is your height?">
      <input
        type="text"
        required
        value={data.height}
        className={styles.form_text_input}
        onChange={(e) => updateFields({ height: e.target.value })}
      />
    </Form>,
    <Form title="What is your weight in (KG)?">
      <input
        type="text"
        required
        min={1}
        value={data.weight}
        className={styles.form_text_input}
        onChange={(e) => updateFields({ weight: e.target.value })}
      />
    </Form>,
    <Form title="What is your current level of physical activity?">
      {currentPhysicalActivity.map((activity) => (
        <label className={styles.form_label}>
          <input
            className={styles.form_label_radio}
            key={activity.current}
            type="radio"
            required
            checked={data.physicalActivity === activity.current}
            name="physical activity"
            value={activity.current}
            onClick={(e) => updateFields({ physicalActivity: e.target.value })}
          />
          {activity.current}
        </label>
      ))}
    </Form>,
    <Form title="What are your goals in terms of weight management?">
      {currentGoals.map((item) => (
        <label className={styles.form_label}>
          <input
            className={styles.form_label_radio}
            key={item.goal}
            type="radio"
            required
            checked={data.goals === item.goal}
            name="goal"
            value={item.goal}
            onClick={(e) => updateFields({ goals: e.target.value })}
          />
          {item.goal}
        </label>
      ))}
    </Form>,
    <Form title="What are your dietary restrictions or preferences?">
      {restrictions.map((restriction) => (
        <label className={styles.form_label}>
          <input
            className={styles.form_label_radio}
            key={restriction.name}
            type="radio"
            required
            checked={data.dietartyRestrictions === restriction.name}
            name="restrictions"
            value={restriction.name}
            onClick={(e) =>
              updateFields({ dietartyRestrictions: e.target.value })
            }
          />
          {restriction.name}
        </label>
      ))}
    </Form>,
    <Form title="Do you have any food allergies or intolerances?">
      {allergens.map((allergy) => (
        <label className={styles.form_label}>
          <input
            className={styles.form_label_radio}
            key={allergy.name}
            type="radio"
            required
            checked={data.foodAllergies === allergy.name}
            name="food allergy"
            value={allergy.name}
            onClick={(e) => updateFields({ foodAllergies: e.target.value })}
          />
          {allergy.name}
        </label>
      ))}
    </Form>,
    <Form title="What are your favourite types of cuisine or flavours?">
      {cuisineFlavours.map((item) => (
        <label className={styles.form_label}>
          <input
            className={styles.form_label_radio}
            key={item.name}
            type="radio"
            required
            checked={data.favouriteCuisine === item.name}
            name="favourite cuisine"
            value={item.name}
            onClick={(e) => updateFields({ favouriteCuisine: e.target.value })}
          />
          {item.name}
        </label>
      ))}
    </Form>,
    <Form title="How much time do you have for meal preparation each day?">
      {availableTime.map((item) => (
        <label className={styles.form_label}>
          <input
            className={styles.form_label_radio}
            key={item.time}
            type="radio"
            required
            checked={data.mealPreparationTime === item.time}
            name="meal prep time"
            value={item.time}
            onClick={(e) =>
              updateFields({ mealPreparationTime: e.target.value })
            }
          />
          {item.time}
        </label>
      ))}
    </Form>,
    <Form title="What is your budget for groceries and meals per month?">
      <input
        type="text"
        required
        min={100}
        value={data.budget}
        className={styles.form_text_input}
        onChange={(e) => updateFields({ budget: e.target.value })}
      />
    </Form>,
    <Form title="Do you have any other specific requirements or preferences for your meal plan?">
      <input
        type="text"
        required
        value={data.otherRequirements}
        className={styles.form_text_input}
        onChange={(e) => updateFields({ otherRequirements: e.target.value })}
      />
    </Form>,
  ]);

  function extractSection(paragraph, startWord, endWord) {
    const startIndex = paragraph.indexOf(startWord) + startWord.length;
    const endIndex = paragraph.indexOf(endWord);
    const section = paragraph.substring(startIndex, endIndex).trim();
    return section;
  }

  function getParagraphFromWordToEnd(paragraph, word) {
    const startIndex = paragraph.indexOf(word)+7;
    return paragraph.substring(startIndex);
  }

  return (
      <div>
        {result ? 
        <>
          <Title></Title>
          <Types 
            diet={data.favouriteCuisine} age={data.dietartyRestrictions} goal={data.goals} physical={data.physicalActivity} cuisine={data.foodAllergies}>
          </Types>
          <Feed 
            title= "Breakfast" link='/_next/static/media/breakfast.2b93a104.svg' plan={extractSection(result, "Breakfast:", "Lunch")}>
          </Feed>
          <Feed 
            title= "Lunch" link='/_next/static/media/lunch.176b852f.svg' plan={extractSection(result, "Lunch:", "Dinner")}>
          </Feed>
          <Feed 
          title= "Dinner" link= '/_next/static/media/dinner.5b8bff3b.svg' plan={getParagraphFromWordToEnd(result,"Dinner:")}>
          </Feed>
        </> : 
        <div className={styles.form_home_wrapper}><form onSubmit={onSubmitForm}>
        <div className="form-page-number">
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div className={styles.form_home_inner_wrapper}>
          {!isFirstStep && (
            <button
              type="button"
              className={styles.form_home_prev}
              onClick={prevStep}
            >
              Previous
            </button>
          )}
          <button type="submit" className={styles.form_home_next}>
            {isLastStep ? "Finish" : "Next"}
          </button>
        </div>
        </form></div>
        }
      </div>
        
  )
}
