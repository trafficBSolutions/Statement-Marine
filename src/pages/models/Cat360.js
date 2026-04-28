import ModelPage from './ModelPage';

const Cat360 = () => (
    <ModelPage
        name="360 Cat"
        subtitle="Pulse-Pounding Performance"
        heroImg="models-gallery-360.jpg"
        description="Matched with twin Mercury Racing 450R outboards, the Statement 360 Cat delivers pulse-pounding performance yet still offers creature comforts for a day at the sandbar with five of your best friends. Known for her predictable handling at speed and rough-water capabilities, she's just as much at home in coastal chop as smooth inland waters."
        highlights={[
            {
                title: 'Best-in-Class Ride and Handling',
                text: 'What sets the Statement 360 Cat apart from the competition? Her exceptional rough-water ride and handling and her predictable, forgiving manners thanks to perfect balance. We believe this is one of the smoothest, safest, and easiest to drive cats in her class in any sea condition, but it\'s when the chop kicks up that she truly shines.',
            },
        ]}
        specs={{
            'LOA': "36'10\"",
            'Beam': "10'0\"",
            'Fuel': '136 gal',
            'Power': 'Up to Twin Mercury Racing 500R',
        }}
        features={{
            'Deck & Cockpit': [
                'Colored gelcoat hull bottom',
                'Single color custom paint w/ logo',
                'Choice of upholstery color',
                'Forward deck hatches (2)',
                'Rear hatch, single',
                'Swim platform with ladder',
                'Stainless pop-up cleats (6)',
                'Stainless flush-mounted hardware',
                'Bow and stern eyes',
                'LED cockpit lighting',
                'Cockpit cupholders',
                'EVA flooring',
            ],
            'Seating': [
                'Race-style high-back bucket driver seats',
                'Four-across cockpit seating',
            ],
            'Dash & Electronics': [
                '22" Garmin multifunction display',
                'Mercury VesselView 703 multi-engine kit',
                'JL Audio system with (4) 7" speakers and (2) 10" subs',
            ],
            'Electrical & Mechanical': [
                'Marine grade batteries',
                'Battery charger',
                'Dual high-volume automatic bilge pumps',
                'Recessed LED navigation lights w/ stainless steel anchor light',
                'CNC propellers',
                'Mercury Racing zero effort digital throttle and shifter controls',
                'Jackplates',
            ],
            'Miscellaneous': [
                'Custom fit cockpit cover',
            ],
        }}
        options={{
            'Paint & Finishes': [
                'Custom painted hull',
                'Color-matched engines',
                'Alcantara upholstery',
            ],
            'Seating & Convenience': [
                'Aft sunpad',
                'Freshwater system with rear shower',
                'LED cupholders',
            ],
            'Electrical & Miscellaneous': [
                'Additional marine grade house battery',
                'LED underwater lights',
                'Full cover',
            ],
        }}
    />
);

export default Cat360;
