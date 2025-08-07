# Blackjack Card Game

A classic Blackjack card game built with HTML, CSS, and JavaScript. Experience the thrill of the casino from the comfort of your browser!

## 🎮 Features

- **Classic Blackjack Rules**: Play with standard casino rules  
- **Beautiful UI**: Realistic casino table design with professional card graphics  
- **Responsive Design**: Works on desktop and mobile devices  
- **Interactive Gameplay**: Hit, Stand, and watch the dealer play  
- **Real-time Scoring**: Live score updates for both player and dealer  
- **Ace Handling**: Smart Ace value calculation (1 or 11)  
- **Dealer AI**: Automated dealer play with standard casino rules  

## 🃏 How to Play

1. **Start the Game**: The game automatically deals two cards to you and the dealer  
2. **Hit**: Take another card to get closer to 21  
3. **Stand**: Keep your current hand and let the dealer play  
4. **Win Conditions**:  
   - Get 21 (Blackjack!)  
   - Get closer to 21 than the dealer without going over  
   - Dealer busts (goes over 21)  

## 🎯 Game Rules

- **Objective**: Beat the dealer by getting closer to 21 without going over  
- **Card Values**:  
  - Number cards (2-10): Face value  
  - Face cards (J, Q, K): 10 points  
  - Ace: 1 or 11 (automatically optimized)  
- **Dealer Rules**: Dealer must hit on 16 or below, stand on 17 or above  
- **Bust**: Going over 21 means you lose  

## 🛠️ Technologies Used

- **HTML5**: Structure and layout  
- **CSS3**: Styling and animations  
- **JavaScript**: Game logic and interactivity  
- **Bootstrap 5**: Responsive design framework  
- **Custom Card Graphics**: Professional casino-style card images  

## �� Project Structure

blackjack-game/  
├── [index.html](./index.html) # Main game interface  
├── [script.js](./script.js) # Game logic and functionality  
├── [style.css](./style.css) # Styling and animations  
└── [img/](./img) # Card images and game assets  
    ├── [board.png](./img/board.png) # Casino table background  
    ├── [cardback.png](./img/cardback.png) # Card back design  
    └── [card images](./img) # All 52 playing cards

## 🖌️ Design Features

- **Casino Atmosphere**: Brown background with professional table design  
- **Card Animations**: Realistic card positioning and shadows  
- **Button Styling**: Casino-style Hit and Stand buttons  
- **Responsive Layout**: Adapts to different screen sizes  
- **Professional Typography**: Clear, readable game text  

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/pube1/blackjack-game.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd blackjack-game
   ```

3. **Open the game**:
   - Simply open `index.html` in your web browser
   - Or use a local server for the best experience

## 🎲 Game Controls

- **Hit Button**: Draw another card
- **Stand Button**: End your turn and let the dealer play
- **Auto-restart**: Game automatically restarts after each round

## 🔧 Development

This project uses vanilla JavaScript with no external dependencies except Bootstrap for styling. The game logic is modular and well-commented for easy understanding and modification.

## 📝 Recent Updates

- ✅ Improved variable naming conventions
- ✅ Translated comments to English
- ✅ Enhanced code organization
- ✅ Better game state management

## 🤝 Contributing

Feel free to contribute to this project by:
- Reporting bugs
- Suggesting new features
- Improving the UI/UX
- Optimizing the game logic

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎯 Future Enhancements

- [ ] Sound effects
- [ ] Betting system
- [ ] Multiple decks
- [ ] Statistics tracking
- [ ] Mobile app version

---

**Note**: This is a simulation game and has no connection with real money gambling.
