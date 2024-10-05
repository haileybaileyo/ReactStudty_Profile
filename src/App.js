import React from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About'; // About 컴포넌트 불러오기

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <About /> 
        </div>
    );
}

export default App;
