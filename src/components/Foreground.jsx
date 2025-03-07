import React, { useRef, useState } from 'react';
import Button from './Button';
import Card from './Card';

const Foreground = () => {
    const ref = useRef(null);
    const [cards, setCards] = useState([
        { desc: "Card-1", filesize: ".9mb", close: true, tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" } },
        { desc: "Card-2", filesize: ".9mb", close: true, tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" } },
        { desc: "Card-3", filesize: ".9mb", close: true, tag: { isOpen: true, tagTitle: "Upload Now", tagColor: "green" } },
    ]);

    // Function to create a new card by copying an existing card
    const createNewCard = () => {
        if (cards.length === 0) return;

        const randomIndex = Math.floor(Math.random() * cards.length);
        const newCard = { ...cards[randomIndex] }; // Clone an existing card
        newCard.desc = `Card-${cards.length + 1}`; // Assign a new unique name

        setCards([...cards, newCard]); // Add the new card to the list
    };

    const deleteCard = (index) => {
        setCards(cards.filter((_, i)=>i !== index));
    }

    return (
        <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-10'>
            {cards.map((item, index) => (
                <Card key={index} data={item} reference={ref} onDelete={()=>{deleteCard(index)}} />
            ))}
            <Button className="absolute top-5 right-5" onClick={createNewCard} />
        </div>
    );
};

export default Foreground;
