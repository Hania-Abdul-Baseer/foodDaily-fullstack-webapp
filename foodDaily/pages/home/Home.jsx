// Styling
import styles from "./home.module.css";

import Card from "./Card";
import SmallerCard from "./SmallerCard";
import { useState } from "react";
import { FormHome } from "../forms/FormHome";

export default function Home() {
  const [clicked, setClicked] = useState(false);

  return !clicked ? (
    <div className={styles.home_wrapper}>
      <Card
        title="Eat your way to a healthier you with personalized meal plans."
        className={styles.card_wrapper}
      >
        <span className={styles.card_paragraph}>
          Get personalized meal plans based on your dietary preferences and
          health goals for a healthier you.
        </span>
        <button className={styles.card_button} onClick={() => setClicked(true)}>
          Get Started
        </button>
      </Card>
      <Card title="Why Food Daily ?" className={styles.card_wrapper_two}>
        <div className={styles.smaller_card_wrapper}>
          <SmallerCard
            title="Personalized Meal Plans for Optimal Health."
            desc="Get customized meal plans based on your dietary preferences and health goals for a healthier you."
          ></SmallerCard>
          <SmallerCard
            title="Healthy Eating Made Simple and Accessible."
            desc="Say goodbye to meal planning and counting calories with Food Daily's convenient meal plans."
          ></SmallerCard>
          <SmallerCard
            title="Expert Nutrition Advice at Your Fingertips."
            desc="Our website offers meal plans developed by nutrition and health experts to help you achieve your goals."
          ></SmallerCard>
          <SmallerCard
            title="Delicious Meals Designed Just for You."
            desc="Enjoy healthy, tasty meals that fit your unique needs and preferences with Food Daily's flexible meal plans."
          ></SmallerCard>
        </div>
      </Card>
    </div>
  ) : (
    <FormHome />
  );
}
