import React, { useState } from 'react';
import './CSS/CarSuggestChatbot.css'

const carDatabase = [
  // SUVs
  { name: "Innova", category: "SUV", budget: 25, mileage: 12, capacity: 7 },
  { name: "Tata Safari", category: "SUV", budget: 30, mileage: 14, capacity: 7 },
  { name: "MG Hector", category: "SUV", budget: 28, mileage: 13, capacity: 5 },
  { name: "Toyota Fortuner", category: "SUV", budget: 40, mileage: 10, capacity: 7 },
  { name: "Hyundai Creta", category: "SUV", budget: 20, mileage: 16, capacity: 5 },
  { name: "Kia Seltos", category: "SUV", budget: 20, mileage: 16, capacity: 5 },
  { name: "BMW X1", category: "SUV", budget: 45, mileage: 11, capacity: 5 },
  { name: "Mercedes-Benz GLA", category: "SUV", budget: 60, mileage: 10, capacity: 5 },
  { name: "Tata Nexon", category: "SUV", budget: 12, mileage: 18, capacity: 5 },
  { name: "Mahindra XUV700", category: "SUV", budget: 25, mileage: 15, capacity: 7 },
  { name: "Jeep Compass", category: "SUV", budget: 30, mileage: 14, capacity: 5 },
  { name: "Honda CR-V", category: "SUV", budget: 35, mileage: 12, capacity: 5 },
  { name: "Volvo XC40", category: "SUV", budget: 55, mileage: 10, capacity: 5 },
  { name: "Audi Q3", category: "SUV", budget: 65, mileage: 11, capacity: 5 },
  { name: "Range Rover Evoque", category: "SUV", budget: 70, mileage: 8, capacity: 5 },
  { name: "Hyundai Alcazar", category: "SUV", budget: 18, mileage: 16, capacity: 6 },
  { name: "Ford Endeavour", category: "SUV", budget: 35, mileage: 9, capacity: 7 },
  { name: "Mahindra Scorpio-N", category: "SUV", budget: 20, mileage: 15, capacity: 7 },
  { name: "Nissan Magnite", category: "SUV", budget: 8, mileage: 20, capacity: 5 },
  { name: "Renault Duster", category: "SUV", budget: 13, mileage: 16, capacity: 5 },

  // Sedans
  { name: "Honda City", category: "Sedan", budget: 15, mileage: 18, capacity: 5 },
  { name: "Hyundai Verna", category: "Sedan", budget: 14, mileage: 19, capacity: 5 },
  { name: "Maruti Ciaz", category: "Sedan", budget: 10, mileage: 21, capacity: 5 },
  { name: "Skoda Superb", category: "Sedan", budget: 35, mileage: 12, capacity: 5 },
  { name: "BMW 3 Series", category: "Sedan", budget: 50, mileage: 12, capacity: 5 },
  { name: "Mercedes-Benz C-Class", category: "Sedan", budget: 60, mileage: 10, capacity: 5 },
  { name: "Audi A4", category: "Sedan", budget: 55, mileage: 11, capacity: 5 },
  { name: "Toyota Camry", category: "Sedan", budget: 45, mileage: 15, capacity: 5 },
  { name: "Volkswagen Virtus", category: "Sedan", budget: 16, mileage: 17, capacity: 5 },
  { name: "Tata Tigor", category: "Sedan", budget: 8, mileage: 20, capacity: 5 },
  { name: "Skoda Octavia", category: "Sedan", budget: 30, mileage: 13, capacity: 5 },
  { name: "Hyundai Elantra", category: "Sedan", budget: 20, mileage: 14, capacity: 5 },
  { name: "Maruti Dzire", category: "Sedan", budget: 7, mileage: 22, capacity: 5 },
  { name: "Honda Amaze", category: "Sedan", budget: 8, mileage: 21, capacity: 5 },
  { name: "Nissan Sunny", category: "Sedan", budget: 9, mileage: 20, capacity: 5 },
  { name: "Kia K5", category: "Sedan", budget: 35, mileage: 14, capacity: 5 },
  { name: "Tesla Model 3", category: "Sedan", budget: 75, mileage: 0, capacity: 5 },
  { name: "Jaguar XF", category: "Sedan", budget: 65, mileage: 9, capacity: 5 },
  { name: "Volvo S60", category: "Sedan", budget: 50, mileage: 11, capacity: 5 },
  { name: "Mahindra e-Verito", category: "Sedan", budget: 12, mileage: 0, capacity: 5 },

  // Hatchbacks
  { name: "Maruti Swift", category: "Hatchback", budget: 8, mileage: 22, capacity: 5 },
  { name: "Hyundai i20", category: "Hatchback", budget: 10, mileage: 21, capacity: 5 },
  { name: "Tata Altroz", category: "Hatchback", budget: 9, mileage: 20, capacity: 5 },
  { name: "Volkswagen Polo", category: "Hatchback", budget: 12, mileage: 18, capacity: 5 },
  { name: "Renault Kwid", category: "Hatchback", budget: 5, mileage: 25, capacity: 5 },
  { name: "Honda Jazz", category: "Hatchback", budget: 9, mileage: 19, capacity: 5 },
  { name: "Toyota Glanza", category: "Hatchback", budget: 8, mileage: 20, capacity: 5 },
  { name: "Kia Rio", category: "Hatchback", budget: 11, mileage: 18, capacity: 5 },
  { name: "Nissan Micra", category: "Hatchback", budget: 7, mileage: 21, capacity: 5 },
  { name: "BMW 1 Series", category: "Hatchback", budget: 30, mileage: 14, capacity: 5 },
  { name: "Mercedes-Benz A-Class", category: "Hatchback", budget: 40, mileage: 12, capacity: 5 },
  { name: "Tata Tiago", category: "Hatchback", budget: 6, mileage: 23, capacity: 5 },
  { name: "Ford Figo", category: "Hatchback", budget: 7, mileage: 21, capacity: 5 },
  { name: "Skoda Fabia", category: "Hatchback", budget: 12, mileage: 17, capacity: 5 },
  { name: "Hyundai Grand i10", category: "Hatchback", budget: 6, mileage: 24, capacity: 5 },
  { name: "Maruti Baleno", category: "Hatchback", budget: 9, mileage: 22, capacity: 5 },
  { name: "Volkswagen Golf", category: "Hatchback", budget: 25, mileage: 14, capacity: 5 },
  { name: "Audi A1", category: "Hatchback", budget: 30, mileage: 12, capacity: 5 },
  { name: "Chevrolet Beat", category: "Hatchback", budget: 5, mileage: 22, capacity: 5 },
  { name: "Mahindra KUV100", category: "Hatchback", budget: 7, mileage: 18, capacity: 5 },
];

const CarSuggestChatbot = () => {
  const [chat, setChat] = useState([{ bot: "How many people travel with you daily?" }]);
  const [step, setStep] = useState(0);
  const [responses, setResponses] = useState({ people: 0, budget: 0, category: '', mileage: 0 });

  const questions = [
    "How many people travel with you daily?",
    "What is your budget for the car (in lakhs)?",
    "Which category of car do you prefer (SUV, sedan, hatchback)?",
    "What is the minimum mileage you're looking for?"
  ];

  const handleUserInput = (input) => {
    if (input.trim() === '') return;
  
    const updatedChat = [...chat, { user: input }];
  
    if (step === 0) responses.people = Number(input);
    if (step === 1) responses.budget = Number(input);
    if (step === 2) responses.category = input;
    if (step === 3) {
      responses.mileage = Number(input);
  
      const suggestions = carDatabase.filter(
        (car) =>
          car.category.toLowerCase() === responses.category.toLowerCase() &&
          car.budget <= responses.budget &&
          car.mileage >= responses.mileage &&
          car.capacity >= responses.people
      );
  
      updatedChat.push({
        bot: `Based on your preferences, we suggest: ${
          suggestions.length > 0
            ? suggestions.map(car => car.name).join(", ")
            : "No cars match your criteria."
        }`
      });
  
      // Reset the chatbot to ask questions again
      updatedChat.push({ bot: questions[0] });
      setResponses({ people: 0, budget: 0, category: '', mileage: 0 });
      setStep(0);
    } else {
      updatedChat.push({ bot: questions[step + 1] });
      setStep(step + 1);
    }
  
    setChat(updatedChat);
    setResponses({ ...responses });
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
      <div>
        <div className="chat-box">
          {chat.map((msg, index) => (
            <div key={index} className={msg.user ? 'user-message' : 'bot-message'}>
              {msg.user || msg.bot}
            </div>
          ))}
        </div>
        {step < questions.length && (
          <input
            type="text"
            placeholder="Type your answer..."
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleUserInput(e.target.value);
                e.target.value = '';
              }
            }}
          />
        )}
      </div>
    </div>
  );
};

export default CarSuggestChatbot;