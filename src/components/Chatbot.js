import React, { useState } from 'react';
import ChatMessage from './ChatMessage';
import ChatOptions from './ChatOptions';
import navbar from './navbar';
import './CSS/Chatbot.css';
import TireScroll from './TireScroll';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const [askedForName, setAskedForName] = useState(false);

  const addMessage = (message) => {
    setMessages([...messages, message]);
  };

  const handleOptionClick = (option) => {
    if (option === 'mileage') {
        addMessage({
            text: `Query :  MILEAGE,\nIncreasing mileage in a car can be achieved through various practices that optimize fuel efficiency. Here are some tips:\n\n
            - Driving Habits: Avoid rapid acceleration and heavy braking. Drive at a consistent speed and use cruise control on highways.\n
            - Maintain Tire Pressure: Keep your tires properly inflated to reduce rolling resistance. Check tire pressure regularly.\n
            - Reduce Weight: Remove unnecessary items from your car to reduce weight, as heavier vehicles require more fuel.\n
            - Regular Maintenance: Ensure your car is well-maintained with regular oil changes, air filter replacements, and tune-ups.\n
            - Aerodynamics: Keep windows closed at high speeds to reduce drag. Remove roof racks and accessories when not in use.\n
            - Fuel Type: Use the recommended fuel grade for your car. Premium fuel is not necessary for vehicles that don't require it.\n
            - Plan Efficient Routes: Choose routes with less traffic and avoid idling. Use GPS apps to find the most fuel-efficient routes.\n
            - Drive Less: Combine trips and carpool when possible to reduce overall mileage.\n----------------------------------------------------`,
          });
    } else if (option === 'engine') {
      addMessage({ text:`Query :  Engine,\nTaking care of your car's engine is crucial for its performance and longevity. Here are some tips:\n\n
      - Regular Oil Changes: Change the engine oil and filter according to your manufacturer's recommendations. This helps keep the engine lubricated and clean.\n
      - Check Fluid Levels: Regularly check the levels of engine coolant, transmission fluid, brake fluid, and power steering fluid. Top them up if necessary.\n
      - Maintain Cooling System: Ensure the cooling system is working efficiently. Check the radiator, hoses, and coolant levels regularly.\n
      - Replace Air Filters: Replace the engine air filter regularly to prevent dirt and debris from entering the engine.\n
      - Use Quality Fuel: Use high-quality fuel to reduce engine wear and improve fuel efficiency.\n
      - Avoid Overloading: Do not overload your vehicle as it puts extra strain on the engine.\n
      - Avoid Excessive Idling: Limit idling as it can cause unnecessary wear on the engine.\n
      - Regular Maintenance: Follow the manufacturer's recommended maintenance schedule for your vehicle.\n----------------------------------------------------`,
    });
      // Add more messages or actions related to the engine
    } else if (option === 'tyres') {
        addMessage({
          text: `Query :  TIRES,\nTaking care of your car's tires is essential for safety and optimal performance. Here are some tips:\n\n
          - Check Tire Pressure: Regularly check the tire pressure (including the spare tire) using a tire pressure gauge. Inflate them to the recommended pressure level.\n
          - Inspect Tread Depth: Check the tread depth regularly. Insert a penny into the tread groove with Lincoln's head upside down. If you can see all of Lincoln's head, it's time to replace the tires.\n
          - Rotate Tires: Rotate your tires regularly to ensure even wear. Follow the recommended rotation pattern in your vehicle's owner's manual.\n
          - Wheel Alignment: Get your wheels aligned periodically to ensure proper alignment. Misaligned wheels can cause uneven tire wear.\n
          - Balance Tires: Balance your tires when they are mounted or when you feel vibrations while driving. Balanced tires ensure a smooth ride and prevent uneven wear.\n
          - Avoid Overloading: Avoid overloading your vehicle, as it can lead to excessive strain on the tires and cause premature wear.\n
          - Avoid Potholes and Obstacles: Try to avoid potholes, curbs, and other obstacles that can damage the tires.\n
          - Use Suitable Tires: Use tires that are suitable for your driving conditions and replace them when they are worn out.\n
          - Check for Damage: Regularly inspect your tires for cuts, cracks, bulges, or other signs of damage. Replace damaged tires immediately.\n----------------------------------------------------`,
        });
      }else if (option === 'battery') {
        addMessage({
          text: `Query :  Battery,\nTaking care of your car battery can help ensure its longevity and optimal performance. Here are some tips:\n\n
          - Keep the Battery Clean: Regularly inspect the battery terminals for corrosion. Clean them with a mixture of baking soda and water if needed.\n
          - Secure the Battery: Ensure that the battery is securely fastened in place to prevent vibrations that can damage it.\n
          - Avoid Short Trips: Short trips don't allow the battery to fully recharge. Whenever possible, take longer drives to help the battery charge fully.\n
          - Turn Off Accessories: When the engine is off, turn off all accessories like lights, radio, and air conditioning to reduce the strain on the battery.\n
          - Check Electrolyte Levels: If you have a conventional battery with removable caps, check the electrolyte levels regularly and top up with distilled water if necessary.\n
          - Keep it Charged: If you don't use your car regularly, consider using a battery maintainer or trickle charger to keep the battery charged.\n
          - Insulate in Extreme Temperatures: Extreme heat or cold can affect battery performance. Insulate the battery with a thermal wrap in extreme conditions.\n
          - Avoid Deep Discharges: Try not to let your battery fully discharge. Recharge it as soon as possible after use.\n
          - Regular Maintenance: Follow the manufacturer's maintenance schedule for your vehicle, which may include checking the battery as part of routine service.\n
          - Replace When Necessary: If your battery is old or not holding a charge well, it may be time for a replacement.\n----------------------------------------------------`,
        });
      }else if (option === 'paint') {
        addMessage({
          text: `Query :  Paint,\nTo take care of your car's paint and maintain its shine, follow these tips:\n\n
          - Wash Regularly: Wash your car with a mild car wash soap and a soft sponge or microfiber cloth. Avoid using household detergents, as they can strip the wax and damage the paint.\n
          - Use a Proper Washing Technique: Start by rinsing the car to remove loose dirt. Then, wash from the top down, using a separate bucket for rinsing your sponge or cloth to avoid scratching the paint.\n
          - Dry Thoroughly: After washing, dry your car with a soft towel to prevent water spots. Avoid air-drying, especially in direct sunlight.\n
          - Wax Regularly: Apply a coat of wax every few months to protect the paint from contaminants and UV rays. Choose a high-quality carnauba or synthetic wax for best results.\n
          - Avoid Scratches: Use a soft cloth or microfiber towel when wiping your car, and avoid abrasive materials that can scratch the paint. Also, be careful when parking to avoid door dings.\n
          - Protect from the Sun: Park in shaded areas or use a car cover to protect your paint from UV rays, which can fade the paint over time.\n
          - Remove Contaminants Promptly: Bird droppings, tree sap, and bugs can damage your paint if left on for too long. Remove them promptly using a soft cloth and a mild cleaner.\n
          - Avoid Automatic Car Washes: While convenient, automatic car washes can be harsh on your paint. If you must use one, choose a touchless wash or a brushless system.\n
          - Touch Up Stone Chips: If you notice stone chips or scratches, touch them up promptly to prevent rust from forming.\n
          - Professional Detailing: Consider getting your car professionally detailed once or twice a year to keep the paint in top condition.\n----------------------------------------------------`,
        });
      }else if (option === 'important documents') {
        addMessage({
          text: `Query :  DOCUMENTS,\nWhen driving in India, it's important to carry the following documents:\n\n
          - Driving License: A valid driving license issued by the Regional Transport Office (RTO) in India.\n
          - Vehicle Registration Certificate (RC): The original copy or a photocopy of the vehicle's registration certificate.\n
          - Insurance Certificate: A copy of the vehicle's insurance certificate.\n
          - Pollution Under Control (PUC) Certificate: A valid PUC certificate for the vehicle.\n
          - Tax Token: Depending on the state, you might need to carry the tax token for your vehicle.\n
          - Permit: If you are driving a commercial vehicle, you might need to carry a permit.\n
          - Identification Proof: Carry a government-issued identification proof like Aadhaar card, PAN card, or passport.\n
          - Vehicle Purchase Invoice: While not mandatory, carrying the vehicle's purchase invoice can be helpful in case of disputes.\n----------------------------------------------------`,
        });
      }
      
      
      
    // Update the text input value
    const inputElement = document.getElementById('textInput');
    inputElement.value = option;
  };

  const handleUserInput = (input) => {
    if (!name) {
      setName(input);
      addMessage({ text: `Hi ${input}, please select which of the following option are you concerned about:`, isBot: true });
      setShowOptions(true);
    } else {
      addMessage({ text: input, isBot: false });
      // Handle user input (if needed)
    }
  };

  if (!askedForName) {
    addMessage({ text: 'What\'s your name?', isBot: true });
    setAskedForName(true);
  }

  return (<div id='chatbotmain'>
    <div className="chatbot-container">
      <div className="chatbot-box">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
        {showOptions && <ChatOptions onOptionClick={handleOptionClick} />}
        <input id="textInput" type="text" placeholder="Type your message..." onKeyPress={(e) => e.key === 'Enter' && handleUserInput(e.target.value)} />
      </div>
    </div></div>
  );
};

export default Chatbot;
