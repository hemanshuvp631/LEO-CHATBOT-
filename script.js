// ================================================
// LEO CHATBOT - COMPLETE JAVASCRIPT
// Beginner-Friendly Code with Full Comments
// ================================================

// ========== CONFIGURATION & DATA ==========

// Chatbot responses database with keywords and answers
const chatbotResponses = {
    greeting: {
        keywords: ['hello', 'hi', 'hey', 'greetings', 'yo', 'sup', 'hola'],
        responses: [
            "Hey there! 👋 How can I help you today?",
            "Hello! Great to see you! What's on your mind? 😊",
            "Hi! Welcome back! How are you doing?",
            "Hey! I'm here and ready to chat! 🎉",
            "Greetings! What would you like to know?"
        ]
    },

    howAreYou: {
        keywords: ['how are you', 'how are you doing', 'how you doing', 'whats up', "what's up"],
        responses: [
            "I'm doing great, thanks for asking! 😊 Ready to help you with anything!",
            "All systems go! I'm running smoothly and excited to chat with you! 🚀",
            "Fantastic! I'm here to assist you. How can I help?",
            "I'm feeling excellent! Thanks for asking! How about you?"
        ]
    },

    name: {
        keywords: ['what is your name', 'whats your name', 'who are you', 'who am i talking to', 'your name'],
        responses: [
            "I'm Leo! 🤖 Your friendly AI assistant. Nice to meet you!",
            "I'm Leo - your AI chatbot buddy! Here to help with any questions.",
            "The name's Leo! 🌟 How can I assist you today?"
        ]
    },

    creator: {
        keywords: ['who created you', 'who made you', 'who built you', 'your creator'],
        responses: [
            "I was created by an awesome developer! 💻 Made with HTML, CSS, and JavaScript - pure frontend magic!",
            "I'm built entirely with frontend technologies! No servers, no database - just pure code in your browser! 🎯",
            "I was crafted with love using frontend technologies! 100% browser-based AI."
        ]
    },

    capabilities: {
        keywords: ['what can you do', 'your capabilities', 'what can i ask', 'help', 'what do you do'],
        responses: [
            "I can help you with:\n✨ Answer questions about coding & tech\n✨ Tell jokes and fun facts\n✨ Provide motivation\n✨ Tech tips and learning guides\n✨ And much more! Just ask! 🚀",
            "I'm your multi-talented assistant! I can:\n📚 Explain programming concepts\n😂 Make you laugh with jokes\n💡 Share cool facts\n🔥 Provide motivation and inspiration\nAsk me anything!",
            "Lots of things! Ask me about programming, tell me to tell a joke, ask for motivation, fun facts, and more! What interests you? 🎪"
        ]
    },

    joke: {
        keywords: ['tell me a joke', 'joke', 'make me laugh', 'funny', 'humor'],
        responses: [
            "Why do programmers prefer dark mode? 🌙 Because light attracts bugs! 🪲",
            "How many programmers does it take to change a light bulb? 💡 None, that's a hardware problem!",
            "Why did the developer go broke? 💰 Because he lost his cache! 😄",
            "Why do Java developers wear glasses? 👓 Because they don't C#!",
            "How do you comfort a JavaScript bug? 🐛 You console it! 😆",
            "Why did the programmer quit his job? 👨‍💼 Because he didn't get arrays! (A raise!)"
        ]
    },

    html: {
        keywords: ['what is html', 'about html', 'html tutorial', 'explain html', 'html basics'],
        responses: [
            "HTML (HyperText Markup Language) is the foundation of web pages! 🏗️\n\n📝 It provides the structure and content\n🏷️ Uses tags like <div>, <p>, <h1>\n🌐 Every website starts with HTML\n\nThink of it as the skeleton of a webpage! 💀"
        ]
    },

    css: {
        keywords: ['what is css', 'about css', 'css tutorial', 'explain css', 'css basics', 'styling'],
        responses: [
            "CSS (Cascading Style Sheets) makes websites beautiful! 🎨\n\n🖌️ Controls colors, fonts, and layouts\n📐 Creates responsive designs\n✨ Adds animations and effects\n🌈 Brings life to HTML structure\n\nCSS is the makeup and clothes of your webpage! 👗"
        ]
    },

    javascript: {
        keywords: ['what is javascript', 'about javascript', 'javascript tutorial', 'explain javascript', 'js basics'],
        responses: [
            "JavaScript is what makes websites interactive! ⚡\n\n🎮 Handles user interactions\n📊 Processes data and logic\n🔄 Makes things dynamic\n✨ Powers most web applications\n\nIt's the brain and muscle of web development! 🧠💪"
        ]
    },

    ai: {
        keywords: ['what is ai', 'about ai', 'artificial intelligence', 'ai explained', 'ai basics'],
        responses: [
            "AI (Artificial Intelligence) is when computers can learn and make decisions! 🤖\n\n🧠 Machine Learning: Learns from data\n🎯 Deep Learning: Complex pattern recognition\n💭 Decision Making: Makes smart choices\n🚀 Applications everywhere!\n\nI'm a simple rule-based AI assistant! 😊"
        ]
    },

    coding: {
        keywords: ['what is coding', 'about coding', 'coding basics', 'what is programming', 'programming'],
        responses: [
            "Coding is giving instructions to computers! 👨‍💻\n\n📝 Write commands in a programming language\n🔧 Computers execute your instructions\n🎯 Build apps, websites, games\n⚙️ Problem-solving through logic\n\nEveryone can learn to code! It's like learning a new language! 🌍"
        ]
    },

    github: {
        keywords: ['what is github', 'about github', 'github tutorial', 'github basics', 'github explained'],
        responses: [
            "GitHub is a platform for sharing and collaborating on code! 🐙\n\n💾 Version Control: Track code changes\n👥 Collaboration: Work with other developers\n📦 Repository: Store your projects\n🌟 Open Source: Share your work\n\nIt's like Google Drive for developers! 📁"
        ]
    },

    learning: {
        keywords: ['how to learn programming', 'learn coding', 'start programming', 'beginner programming', 'learn to code'],
        responses: [
            "Here's your learning roadmap! 🗺️\n\n1️⃣ Start with HTML basics\n2️⃣ Learn CSS for styling\n3️⃣ Master JavaScript fundamentals\n4️⃣ Build small projects\n5️⃣ Learn version control (Git)\n6️⃣ Join communities & practice\n7️⃣ Build bigger projects!\n\n💡 Practice daily, build things, never stop learning! 🚀"
        ]
    },

    bestLanguage: {
        keywords: ['best programming language', 'which language to learn', 'programming language recommendation', 'easiest language'],
        responses: [
            "There's no 'best' language - it depends on your goals! 🎯\n\n🌐 Web: JavaScript, Python, PHP\n📱 Mobile: Swift, Kotlin, Flutter\n🎮 Games: C++, C#, UnityScript\n🔧 Systems: C, C++, Rust\n📊 Data: Python, R, SQL\n\n💡 For beginners: Start with Python or JavaScript! 🐍✨"
        ]
    },

    motivation: {
        keywords: ['tell me motivation', 'motivate me', 'motivation', 'inspirational', 'i need motivation'],
        responses: [
            "You've got this! 💪\n\n🌟 Every expert was once a beginner\n🎯 Your mistakes are your lessons\n🚀 Progress > Perfection\n💡 Dream big, work hard, stay humble\n⭐ The only way out is through!\n\nRemember: You're more capable than you think! 🔥"
        ]
    },

    goodMorning: {
        keywords: ['good morning', 'morning', 'guten morgen', 'buenos dias'],
        responses: [
            "Good morning! ☀️ Hope you have an amazing day ahead!",
            "Rise and shine! ✨ Time to conquer the day!",
            "Good morning, superstar! 🌅 Let's make today count!"
        ]
    },

    goodNight: {
        keywords: ['good night', 'goodnight', 'night', 'sleep well', 'sweet dreams'],
        responses: [
            "Sleep tight! 😴 Dream big dreams! 💭",
            "Good night! Rest well and recharge! ✨",
            "Sweet dreams! See you tomorrow! 🌙"
        ]
    },

    thankyou: {
        keywords: ['thank you', 'thanks', 'appreciate', 'grateful', 'gracias', 'merci'],
        responses: [
            "You're welcome! Happy to help! 😊",
            "Anytime! That's what I'm here for! 🤖",
            "No problem at all! Feel free to ask more! 🌟"
        ]
    },

    goodbye: {
        keywords: ['bye', 'goodbye', 'see you', 'later', 'farewell', 'cya', 'ttyl'],
        responses: [
            "Goodbye! See you next time! 👋",
            "Take care! Come back soon! 🌟",
            "See you later! Have an awesome day! 🚀"
        ]
    },

    time: {
        keywords: ['what time is it', 'current time', 'time now', 'what\'s the time'],
        responses: [
            (function() {
                const now = new Date();
                const time = now.toLocaleTimeString('en-US', { 
                    hour: '2-digit', 
                    minute: '2-digit',
                    hour12: true 
                });
                return `It's ${time} right now! ⏰`;
            })()
        ]
    },

    today: {
        keywords: ['what day is today', 'what\'s today', 'current date', 'today date', 'what date is it'],
        responses: [
            (function() {
                const now = new Date();
                const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                const date = now.toLocaleDateString('en-US', options);
                return `Today is ${date}! 📅`;
            })()
        ]
    },

    youtube: {
        keywords: ['open youtube', 'youtube', 'go to youtube', 'visit youtube'],
        responses: [
            "I can't open websites directly, but you can visit:\n🎥 www.youtube.com\n\nGreat places to learn programming:\n📺 Traversy Media\n📺 Fireship\n📺 Academind\n\nCheck them out! 🚀"
        ]
    },

    google: {
        keywords: ['open google', 'google', 'go to google', 'visit google'],
        responses: [
            "I can't open websites directly, but you can visit:\n🔍 www.google.com\n\nTip: You can search anything on Google! 😊"
        ]
    },

    chatgpt: {
        keywords: ['what is chatgpt', 'about chatgpt', 'chatgpt explained', 'chatgpt vs leo'],
        responses: [
            "ChatGPT is an advanced AI chatbot by OpenAI! 🤖\n\n📚 Trained on massive amounts of text\n💭 Uses deep learning (neural networks)\n🔧 Requires cloud servers and APIs\n💰 Subscription-based model\n\nMeanwhile, I'm Leo - a lightweight, offline-first chatbot! 🌟\n✨ 100% browser-based\n⚡ No internet needed\n🔐 Privacy-first design\n🚀 Built with pure frontend code!"
        ]
    },

    funfact: {
        keywords: ['tell me a fun fact', 'fun fact', 'interesting fact', 'did you know'],
        responses: [
            "Did you know? 🎯\nThe first webcam was used to monitor a coffee machine! ☕",
            "Fun fact! 🌟\nThe @ symbol is called 'at sign' in English, but different things in other countries!",
            "Cool fact! 💡\nThe first computer bug was actually a real bug - a moth caught in a computer!",
            "Mind blown? 🤯\nThere are more possible chess games than atoms in the universe!",
            "Fact time! 📚\nThe Python programming language was named after Monty Python, not the snake! 🐍"
        ]
    },

    chatgptapi: {
        keywords: ['use chatgpt api', 'openai api', 'claude api', 'llm api'],
        responses: [
            "This chatbot uses keyword matching instead of APIs! 🎯\n\n✨ No external dependencies\n🔐 100% privacy-preserved\n⚡ Fast and lightweight\n💾 Works completely offline\n\nIf you want to integrate real APIs, you'd need a backend server! 🚀"
        ]
    },

    fallback: {
        keywords: [], // This is the default response
        responses: [
            "That's an interesting question! 🤔 I'm still learning. Try asking me about programming, tech, or asking for motivation! 💡",
            "I'm not sure about that one, but I'm here to help with coding, tech tips, jokes, and motivation! What else can I help with? 😊",
            "Hmm, I don't have an answer for that yet! 🤷 Ask me about programming languages, tech concepts, or something fun! 🎉",
            "That's beyond my current knowledge! 📚 But I'm great at explaining code, telling jokes, and giving motivation! Try those! 🚀"
        ]
    }
};

// Welcome messages that appear when chat loads
const welcomeMessages = [
    "Hey there! I'm Leo, your AI assistant. Ask me anything! 🌟",
    "Welcome! I'm Leo. Ready to chat about tech, coding, or just having fun? 🤖",
    "Hi! I'm Leo. What can I help you with today? 💡"
];

// ========== DOM ELEMENTS ==========

const messageInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');
const messagesContainer = document.querySelector('.messages-container');
const sidebar = document.querySelector('.sidebar');
const menuToggle = document.querySelector('.menu-toggle');
const closeSidebar = document.querySelector('.close-sidebar');
const clearBtn = document.querySelector('.clear-btn');
const quickBtns = document.querySelectorAll('.quick-btn');
const notificationSound = document.getElementById('notification-sound');
const welcomeText = document.getElementById('welcome-text');

// ========== HELPER FUNCTIONS ==========

/**
 * Get current time in readable format
 * Used for message timestamps
 */
function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
    });
}

/**
 * Play notification sound when bot responds
 * Provides feedback to user
 */
function playSound() {
    try {
        notificationSound.currentTime = 0;
        notificationSound.play().catch(() => {
            // Silently fail if browser doesn't allow autoplay
        });
    } catch (e) {
        // Sound might not be supported
    }
}

/**
 * Auto-scroll to latest message
 * Keeps newest messages visible
 */
function autoScroll() {
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

/**
 * Keyword matching algorithm
 * Finds best matching response from chatbot database
 */
function findBotResponse(userMessage) {
    const messageLower = userMessage.toLowerCase().trim();
    
    // Check each response category
    for (const category in chatbotResponses) {
        const category_data = chatbotResponses[category];
        const keywords = category_data.keywords;
        
        // Check if any keyword matches
        for (const keyword of keywords) {
            if (messageLower.includes(keyword)) {
                const responses = category_data.responses;
                // Return random response from this category
                return responses[Math.floor(Math.random() * responses.length)];
            }
        }
    }
    
    // If no match found, return fallback response
    const fallbackResponses = chatbotResponses.fallback.responses;
    return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
}

/**
 * Create and display message bubble
 * Shows user and bot messages with styling
 */
function displayMessage(text, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', isUser ? 'user-message' : 'bot-message');
    
    const avatar = document.createElement('div');
    avatar.classList.add('message-avatar', isUser ? 'user-avatar' : 'bot-avatar');
    avatar.textContent = isUser ? '👤' : '🤖';
    
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('message-content');
    
    const messagePara = document.createElement('p');
    messagePara.textContent = text;
    
    const timeSpan = document.createElement('span');
    timeSpan.classList.add('message-time');
    timeSpan.textContent = getCurrentTime();
    
    contentDiv.appendChild(messagePara);
    contentDiv.appendChild(timeSpan);
    
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(contentDiv);
    
    messagesContainer.appendChild(messageDiv);
    autoScroll();
}

/**
 * Show typing indicator while bot "thinks"
 * Creates visual feedback for processing
 */
function showTypingIndicator() {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', 'bot-message');
    messageDiv.id = 'typing-indicator';
    
    const avatar = document.createElement('div');
    avatar.classList.add('message-avatar', 'bot-avatar');
    avatar.textContent = '🤖';
    
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('message-content');
    
    const dotsDiv = document.createElement('div');
    dotsDiv.classList.add('loading-dots');
    
    for (let i = 0; i < 3; i++) {
        const dot = document.createElement('div');
        dot.classList.add('loading-dot');
        dotsDiv.appendChild(dot);
    }
    
    contentDiv.appendChild(dotsDiv);
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(contentDiv);
    
    messagesContainer.appendChild(messageDiv);
    autoScroll();
}

/**
 * Remove typing indicator
 * Clean up after bot responds
 */
function removeTypingIndicator() {
    const typingIndicator = document.getElementById('typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

/**
 * Handle user message and bot response
 * Core logic of the chatbot
 */
function handleMessage() {
    const userMessage = messageInput.value.trim();
    
    // Don't process empty messages
    if (!userMessage) return;
    
    // Display user message
    displayMessage(userMessage, true);
    
    // Clear input field
    messageInput.value = '';
    messageInput.focus();
    
    // Show typing indicator
    showTypingIndicator();
    
    // Simulate thinking time (200-800ms)
    setTimeout(() => {
        removeTypingIndicator();
        
        // Get bot response based on keywords
        const botResponse = findBotResponse(userMessage);
        
        // Display bot response
        displayMessage(botResponse, false);
        
        // Play sound effect
        playSound();
    }, Math.random() * 600 + 200);
}

/**
 * Clear all messages from chat
 * Reset conversation
 */
function clearChat() {
    if (confirm('Are you sure you want to clear the chat? This cannot be undone.')) {
        messagesContainer.innerHTML = '';
        
        // Show welcome message again
        const welcomeMsg = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
        welcomeText.textContent = welcomeMsg;
        
        const welcomeDiv = document.createElement('div');
        welcomeDiv.classList.add('message', 'bot-message', 'welcome-message');
        
        const avatar = document.createElement('div');
        avatar.classList.add('message-avatar', 'bot-avatar');
        avatar.textContent = '🤖';
        
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('message-content');
        
        const messagePara = document.createElement('p');
        messagePara.textContent = welcomeMsg;
        
        const timeSpan = document.createElement('span');
        timeSpan.classList.add('message-time');
        timeSpan.textContent = getCurrentTime();
        
        contentDiv.appendChild(messagePara);
        contentDiv.appendChild(timeSpan);
        
        welcomeDiv.appendChild(avatar);
        welcomeDiv.appendChild(contentDiv);
        
        messagesContainer.appendChild(welcomeDiv);
        autoScroll();
    }
}

// ========== EVENT LISTENERS ==========

/**
 * Send button click handler
 */
sendBtn.addEventListener('click', handleMessage);

/**
 * Enter key to send message
 * Improves user experience
 */
messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleMessage();
    }
});

/**
 * Quick question buttons
 * Fast access to common queries
 */
quickBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const question = btn.getAttribute('data-question');
        messageInput.value = question;
        messageInput.focus();
        
        // Auto-send after short delay
        setTimeout(handleMessage, 100);
    });
});

/**
 * Clear chat button
 */
clearBtn.addEventListener('click', clearChat);

/**
 * Mobile menu toggle
 * Show/hide sidebar on small screens
 */
menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

/**
 * Close sidebar button
 */
closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('active');
});

/**
 * Close sidebar when clicking outside
 * Better mobile experience
 */
document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
        sidebar.classList.remove('active');
    }
});

// ========== INITIALIZATION ==========

/**
 * Set random welcome message
 */
window.addEventListener('load', () => {
    const randomWelcome = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
    welcomeText.textContent = randomWelcome;
    messageInput.focus();
});
