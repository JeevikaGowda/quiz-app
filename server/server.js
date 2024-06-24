const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const categories = [
  {
    id: 1,
    name: "Indian History",
    description: "Test your knowledge of Indian historical events",
    timeLimit: 5,
  },
  {
    id: 2,
    name: "Indian Geography",
    description: "Explore the diverse landscapes of India",
    timeLimit: 5,
  },
  {
    id: 3,
    name: "Indian Culture",
    description: "Dive into the rich cultural heritage of India",
    timeLimit: 5,
  },
  {
    id: 4,
    name: "Indian Politics",
    description: "Challenge yourself with Indian political trivia",
    timeLimit: 5,
  },
  {
    id: 5,
    name: "Indian Sports",
    description: "Test your knowledge of Indian sports and athletes",
    timeLimit: 5,
  },
  {
    id: 6,
    name: "Indian Cinema",
    description: "Explore the world of Bollywood and Indian cinema",
    timeLimit: 5,
  },
  {
    id: 7,
    name: "Indian Literature",
    description: "Discover famous Indian authors and their works",
    timeLimit: 5,
  },
];

const questions = {
  1: [
    {
      question: "In which year did India gain independence from British rule?",
      options: ["1945", "1947", "1950", "1952"],
      correct: 1,
    },
    {
      question: "Who is known as the 'Father of the Nation' in India?",
      options: [
        "Jawaharlal Nehru",
        "Sardar Patel",
        "Mahatma Gandhi",
        "Subhas Chandra Bose",
      ],
      correct: 2,
    },
    {
      question:
        "Which empire ruled over the largest area of the Indian subcontinent?",
      options: [
        "Maurya Empire",
        "Gupta Empire",
        "Mughal Empire",
        "Maratha Empire",
      ],
      correct: 2,
    },
    {
      question: "Who was the first woman Prime Minister of India?",
      options: [
        "Sonia Gandhi",
        "Indira Gandhi",
        "Pratibha Patil",
        "Sarojini Naidu",
      ],
      correct: 1,
    },
    {
      question: "The Battle of Plassey was fought in which year?",
      options: ["1757", "1764", "1775", "1784"],
      correct: 0,
    },
    {
      question: "Who founded the Maurya Empire?",
      options: ["Ashoka", "Chandragupta Maurya", "Bindusara", "Chanakya"],
      correct: 1,
    },
    {
      question: "The Quit India Movement was launched in which year?",
      options: ["1935", "1940", "1942", "1945"],
      correct: 2,
    },
    {
      question: "Who was the last Mughal Emperor of India?",
      options: ["Akbar II", "Shah Alam II", "Bahadur Shah Zafar", "Aurangzeb"],
      correct: 2,
    },
    {
      question: "The Indian National Congress was founded in which year?",
      options: ["1885", "1890", "1905", "1920"],
      correct: 0,
    },
    {
      question: "Who composed the Indian national anthem 'Jana Gana Mana'?",
      options: [
        "Bankim Chandra Chattopadhyay",
        "Rabindranath Tagore",
        "Sarojini Naidu",
        "Lata Mangeshkar",
      ],
      correct: 1,
    },
  ],
  2: [
    // Indian Geography
    {
      question: "Which is the southernmost point of mainland India?",
      options: [
        "Indira Point",
        "Kanyakumari",
        "Rameshwaram",
        "Thiruvanthapuram",
      ],
      correct: 1,
    },
    {
      question: "Which river is known as the 'Sorrow of Bihar'?",
      options: ["Ganges", "Kosi", "Yamuna", "Brahmaputra"],
      correct: 1,
    },
    {
      question: "Which is the largest state in India by area?",
      options: ["Madhya Pradesh", "Maharashtra", "Uttar Pradesh", "Rajasthan"],
      correct: 3,
    },
    {
      question: "The Palk Strait separates India from which country?",
      options: ["Maldives", "Indonesia", "Sri Lanka", "Myanmar"],
      correct: 2,
    },
    {
      question: "Which is the highest mountain peak in India?",
      options: ["Nanda Devi", "Kangchenjunga", "K2", "Mount Everest"],
      correct: 1,
    },
    {
      question: "Which Indian state has the longest coastline?",
      options: ["Kerala", "Tamil Nadu", "Maharashtra", "Gujarat"],
      correct: 3,
    },
    {
      question: "The Thar Desert is primarily located in which Indian state?",
      options: ["Gujarat", "Rajasthan", "Madhya Pradesh", "Uttar Pradesh"],
      correct: 1,
    },
    {
      question: "Which is the largest freshwater lake in India?",
      options: ["Dal Lake", "Wular Lake", "Chilika Lake", "Pulicat Lake"],
      correct: 1,
    },
    {
      question: "Which river forms the Bhakra Nangal Dam?",
      options: ["Satluj", "Beas", "Yamuna", "Chenab"],
      correct: 0,
    },
    {
      question: "Which Indian city is known as the 'Silicon Valley of India'?",
      options: ["Mumbai", "Hyderabad", "Bangalore", "Pune"],
      correct: 2,
    },
  ],

  3: [
    // Indian Culture
    {
      question: "Which festival is known as the 'Festival of Lights' in India?",
      options: ["Holi", "Diwali", "Navratri", "Durga Puja"],
      correct: 1,
    },
    {
      question: "Which classical dance form originated in the state of Kerala?",
      options: ["Bharatanatyam", "Kathak", "Kathakali", "Odissi"],
      correct: 2,
    },
    {
      question: "What is the traditional Indian greeting?",
      options: ["Hello", "Salaam", "Namaste", "Vanakkam"],
      correct: 2,
    },
    {
      question: "Which is considered the holiest river in India?",
      options: ["Yamuna", "Ganges", "Brahmaputra", "Godavari"],
      correct: 1,
    },
    {
      question: "What is the national animal of India?",
      options: ["Lion", "Elephant", "Tiger", "Leopard"],
      correct: 2,
    },
    {
      question:
        "Which of these is NOT one of the major religions originating in India?",
      options: ["Hinduism", "Buddhism", "Jainism", "Islam"],
      correct: 3,
    },
    {
      question: "What is the traditional Indian dress for women?",
      options: ["Kimono", "Sari", "Cheongsam", "Kaftan"],
      correct: 1,
    },
    {
      question: "Which ancient Indian text is known as the 'Song of God'?",
      options: ["Ramayana", "Mahabharata", "Bhagavad Gita", "Vedas"],
      correct: 2,
    },
    {
      question: "What is the national flower of India?",
      options: ["Rose", "Sunflower", "Lotus", "Jasmine"],
      correct: 2,
    },
    {
      question: "Which martial art form originated in Kerala?",
      options: ["Karate", "Kung Fu", "Kalaripayattu", "Taekwondo"],
      correct: 2,
    },
  ],

  4: [
    // Indian Politics
    {
      question: "Who was the first President of India?",
      options: [
        "Jawaharlal Nehru",
        "Dr. Rajendra Prasad",
        "Sardar Patel",
        "Dr. S. Radhakrishnan",
      ],
      correct: 1,
    },
    {
      question: "How many states are there in India (as of 2023)?",
      options: ["28", "29", "30", "31"],
      correct: 0,
    },
    {
      question: "What is the lower house of the Indian Parliament called?",
      options: ["Rajya Sabha", "Lok Sabha", "Vidhan Sabha", "Jan Sabha"],
      correct: 1,
    },
    {
      question: "Who was the first woman President of India?",
      options: [
        "Indira Gandhi",
        "Pratibha Patil",
        "Sonia Gandhi",
        "Sarojini Naidu",
      ],
      correct: 1,
    },
    {
      question:
        "Which constitutional amendment introduced the Goods and Services Tax (GST) in India?",
      options: ["101st", "115th", "122nd", "123rd"],
      correct: 1,
    },
    {
      question: "Who is known as the 'Iron Man of India'?",
      options: [
        "Jawaharlal Nehru",
        "Sardar Vallabhbhai Patel",
        "Lal Bahadur Shastri",
        "B.R. Ambedkar",
      ],
      correct: 1,
    },
    {
      question: "What is the minimum age to become the President of India?",
      options: ["25 years", "30 years", "35 years", "40 years"],
      correct: 2,
    },
    {
      question:
        "Which committee is responsible for delimitation of constituencies in India?",
      options: [
        "Election Commission",
        "Delimitation Commission",
        "NITI Aayog",
        "Law Commission",
      ],
      correct: 1,
    },
    {
      question: "Who was the chief architect of the Indian Constitution?",
      options: [
        "Mahatma Gandhi",
        "Jawaharlal Nehru",
        "B.R. Ambedkar",
        "Sardar Patel",
      ],
      correct: 2,
    },
    {
      question: "What is the term of office for a member of the Rajya Sabha?",
      options: ["4 years", "5 years", "6 years", "7 years"],
      correct: 2,
    },
  ],

  5: [
    // Indian Sports
    {
      question: "Who is known as the 'Flying Sikh' in Indian athletics?",
      options: [
        "P.T. Usha",
        "Milkha Singh",
        "Anju Bobby George",
        "Gurbachan Singh Randhawa",
      ],
      correct: 1,
    },
    {
      question:
        "Which Indian cricketer has scored the most runs in international cricket?",
      options: [
        "Virat Kohli",
        "Sachin Tendulkar",
        "Rahul Dravid",
        "Sunil Gavaskar",
      ],
      correct: 1,
    },
    {
      question:
        "Who was the first Indian to win an individual Olympic gold medal?",
      options: [
        "Abhinav Bindra",
        "Rajyavardhan Singh Rathore",
        "Vijender Singh",
        "Sushil Kumar",
      ],
      correct: 0,
    },
    {
      question:
        "Which Indian badminton player won a silver medal in women's singles at the 2016 Rio Olympics?",
      options: [
        "Saina Nehwal",
        "Jwala Gutta",
        "P.V. Sindhu",
        "Ashwini Ponnappa",
      ],
      correct: 2,
    },
    {
      question: "In which year did India win its first Cricket World Cup?",
      options: ["1975", "1983", "1987", "2011"],
      correct: 1,
    },
    {
      question: "Who is the first Indian woman to win an Olympic medal?",
      options: ["Mary Kom", "Karnam Malleswari", "Saina Nehwal", "P.V. Sindhu"],
      correct: 1,
    },
    {
      question:
        "Which Indian chess player became the youngest Grandmaster in 2002?",
      options: [
        "Viswanathan Anand",
        "Pentala Harikrishna",
        "Koneru Humpy",
        "Parimarjan Negi",
      ],
      correct: 3,
    },
    {
      question: "Who is the highest wicket-taker in Test cricket for India?",
      options: [
        "Kapil Dev",
        "Anil Kumble",
        "Harbhajan Singh",
        "Ravichandran Ashwin",
      ],
      correct: 1,
    },
    {
      question:
        "Which Indian woman cricketer has scored the most runs in international cricket?",
      options: [
        "Mithali Raj",
        "Smriti Mandhana",
        "Harmanpreet Kaur",
        "Jhulan Goswami",
      ],
      correct: 0,
    },
    {
      question:
        "Who was the captain of the Indian hockey team that won the gold medal at the 1980 Moscow Olympics?",
      options: [
        "Zafar Iqbal",
        "Vasudevan Baskaran",
        "Surjit Singh",
        "Mohd. Shahid",
      ],
      correct: 1,
    },
  ],

  6: [
    // Indian Cinema
    {
      question: "Which was the first Indian sound film?",
      options: ["Raja Harishchandra", "Alam Ara", "Sholay", "Mother India"],
      correct: 1,
    },
    {
      question: "Who is known as the 'Father of Indian Cinema'?",
      options: ["Satyajit Ray", "Dadasaheb Phalke", "Raj Kapoor", "Guru Dutt"],
      correct: 1,
    },
    {
      question:
        "Which Indian film was the first to be nominated for an Oscar in the Best Foreign Language Film category?",
      options: ["Lagaan", "Mother India", "Salaam Bombay!", "The Lunchbox"],
      correct: 1,
    },
    {
      question: "Who was the first Indian to win an Oscar?",
      options: [
        "A.R. Rahman",
        "Satyajit Ray",
        "Bhanu Athaiya",
        "Resul Pookutty",
      ],
      correct: 2,
    },
    {
      question: "Which Bollywood actor is known as the 'King of Romance'?",
      options: [
        "Amitabh Bachchan",
        "Aamir Khan",
        "Shah Rukh Khan",
        "Salman Khan",
      ],
      correct: 2,
    },
    {
      question:
        "Which Indian film won the Palme d'Or at the Cannes Film Festival in 1946?",
      options: ["Neecha Nagar", "Pather Panchali", "Awaara", "Do Bigha Zamin"],
      correct: 0,
    },
    {
      question: "Who directed the iconic Indian film 'Sholay'?",
      options: ["Yash Chopra", "Ramesh Sippy", "Raj Kapoor", "Mehboob Khan"],
      correct: 1,
    },
    {
      question: "Which was the first Indian film to be shot in cinemascope?",
      options: ["Kaagaz Ke Phool", "Aan", "Mother India", "Awaara"],
      correct: 0,
    },
    {
      question:
        "Who was the first Indian actor to become a UNICEF Goodwill Ambassador?",
      options: [
        "Priyanka Chopra",
        "Amitabh Bachchan",
        "Aishwarya Rai",
        "Sharmila Tagore",
      ],
      correct: 1,
    },
    {
      question: "Which Indian actress won the Miss World title in 1994?",
      options: [
        "Sushmita Sen",
        "Aishwarya Rai",
        "Priyanka Chopra",
        "Lara Dutta",
      ],
      correct: 1,
    },
  ],

  7: [
    // Indian Literature
    {
      question: "Who wrote the Indian national song 'Vande Mataram'?",
      options: [
        "Rabindranath Tagore",
        "Bankim Chandra Chattopadhyay",
        "Sarojini Naidu",
        "Subramanya Bharathi",
      ],
      correct: 1,
    },
    {
      question: "Which Indian author wrote 'The God of Small Things'?",
      options: [
        "Vikram Seth",
        "Arundhati Roy",
        "Amitav Ghosh",
        "Jhumpa Lahiri",
      ],
      correct: 1,
    },
    {
      question: "Who is the author of the famous Indian epic 'Mahabharata'?",
      options: ["Valmiki", "Tulsidas", "Vyasa", "Kalidasa"],
      correct: 2,
    },
    {
      question:
        "Which Indian writer was awarded the Nobel Prize for Literature in 1913?",
      options: [
        "Rabindranath Tagore",
        "R.K. Narayan",
        "Mulk Raj Anand",
        "Sarojini Naidu",
      ],
      correct: 0,
    },
    {
      question: "Who wrote the famous play 'Hayavadana'?",
      options: [
        "Vijay Tendulkar",
        "Girish Karnad",
        "Badal Sircar",
        "Mohan Rakesh",
      ],
      correct: 1,
    },
    {
      question: "Which Indian author wrote 'Train to Pakistan'?",
      options: [
        "Khushwant Singh",
        "Ruskin Bond",
        "R.K. Narayan",
        "Salman Rushdie",
      ],
      correct: 0,
    },
    {
      question: "Who is the author of the famous Indian novel 'Godan'?",
      options: [
        "Premchand",
        "Mahadevi Verma",
        "Harivansh Rai Bachchan",
        "Jaishankar Prasad",
      ],
      correct: 0,
    },
    {
      question: "Which Indian author wrote 'The Inheritance of Loss'?",
      options: [
        "Anita Desai",
        "Kiran Desai",
        "Aravind Adiga",
        "Rohinton Mistry",
      ],
      correct: 1,
    },
    {
      question:
        "Who wrote the famous Indian patriotic poem 'Sarfaroshi ki Tamanna'?",
      options: [
        "Bhagat Singh",
        "Ram Prasad Bismil",
        "Subramania Bharati",
        "Muhammad Iqbal",
      ],
      correct: 1,
    },
    {
      question:
        "Which Indian author wrote the Booker Prize-winning novel 'Midnight's Children'?",
      options: [
        "V.S. Naipaul",
        "Salman Rushdie",
        "Amitav Ghosh",
        "Arundhati Roy",
      ],
      correct: 1,
    },
  ],
};

app.get("/api/categories", (req, res) => {
  res.json(categories);
});

app.get("/api/questions/:categoryId", (req, res) => {
  const categoryId = parseInt(req.params.categoryId);
  res.json(questions[categoryId] || []);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
