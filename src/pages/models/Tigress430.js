import ModelPage from './ModelPage';

const Tigress430 = () => (
    <ModelPage
        name="430 Tigress"
        subtitle="A New Breed of Center Console Catamaran"
        heroImg="models-gallery-430.jpg"
        description="Representing a decisive step forward in performance center consoles, the 430 Tigress delivers the rough-water ride and stability of a catamaran without sacrificing the comfort of an overnight cabin with standing headroom. The innovative hull design effortlessly swallows up chop and swells, while the spacious interior offers plenty of room for entertaining and impresses with Statement's signature style and attention to detail."
        highlights={[
            {
                title: 'Pioneering Hull Design',
                text: 'A completely original design, the 430 Tigress\' twin-stepped, asymmetrical catamaran hull delivers an exceptionally smooth rough water ride at any speed and leans predictably into turns like a V-bottom. Aggressive lines and pronounced flare forward make her unmistakable on the water, while a carefully tuned level running attitude improves efficiency and comfort.',
            },
        ]}
        specs={{
            'LOA': "45'6\"",
            'Beam': "12'0\"",
            'Draft': "3'0\"",
            'Dry Weight': '16,900 lbs',
            'Fuel': '600/800 gal',
            'Freshwater': '28 gal',
            'Bridge Clearance': "9'6\"",
            'Power': '1,200–2,000 hp',
        }}
        features={{
            'Deck & Cockpit': [
                'Self-bailing cockpit with integrated scupper system',
                'Nonskid deck and gunwales',
                'All stainless steel hardware',
                '(5) pull-up cleats — 1 forward, 2 midships, 2 aft',
                'Low-profile, recessed stainless bow rail',
                'Full cockpit wraparound coaming bolsters',
            ],
            'Console': [
                'Leather-wrapped stainless steel steering wheel',
                'Full digital switching and instrumentation',
                'Large electronics mounting area',
                '1/2" acrylic wraparound windshield with powder-coated aluminum frame',
                'Stainless steel cup holders (2)',
                'Grab handle',
                'Sliding acrylic cabin/head entry door',
                'Fully finished fiberglass hard top with courtesy and spreader lighting',
                'Three-position bolster helm seat with folding armrests and cup holders',
            ],
            'Seating': [
                'Twin two-position transom bench seats with center walk-through',
                'Full-width bow bench seating',
                'Two-position forward console seating with folding center armrest, cup holders, and grab handles',
            ],
            'Storage': [
                'Overboard-draining, recessed bow anchor locker',
                'Port and starboard recessed dock line lockers',
                'Four large sealed and drained under-deck lockers',
                'Two large dry storage compartments in transom',
            ],
            'Electrical': [
                'Heavy duty marine batteries and trays',
                'Battery switches with circuit breakers',
                'Dual, high-volume automatic bilge pumps',
                'Integrated LED navigation lights',
                'Forward and aft spreader lights',
                'Overhead and cockpit courtesy lights',
                'Electric, recessed horns with stainless grilles',
            ],
            'Mechanical': [
                'Stainless steel high-performance propellers',
                'Full hydraulic steering',
            ],
        }}
        options={{
            'Power': [
                'Quad Mercury Racing 500R V8',
                'Quad Mercury Verado 400 V10',
                'Twin Mercury Verado 600 V12',
            ],
            'Paint & Finishes': [
                'Painted hullsides, console, hardtop accents, and pin',
                'Custom paint, "mild to wild"',
                'Color-matched engines',
                'Powdercoat package',
                'EVA flooring & EVA top',
                'Alcantara interior accents or full interior',
            ],
            'Seating & Convenience': [
                'Three-position bolster helm seat w/ wet bar',
                'Three-position bolster helm seat w/ rear-facing lounge',
                'Second-row bolster helm seat',
                'Second-row bolster helm seat w/ wet bar',
                'Powered SureShade cockpit sunshade',
                'Removable cockpit table',
                'LED drink holders (6) & Yeti holders (2)',
            ],
            'Electrical & Mechanical': [
                'Lithium batteries',
                'On-board battery charger',
                'Additional deep-cycle house battery',
                'Generator',
                'Transom freshwater shower',
                'Raw water washdown',
                'Windlass package w/ Delta stainless steel anchor',
                'Light bar',
                'Underwater LED transom/tunnel lighting',
                'LED windshield accent lighting',
            ],
            'Electronics & Audio': [
                'Dual Garmin 8622 MFDs',
                'Garmin radar',
                'Nite Track infrared',
                'Autopilot interface',
                'Level 1 audio — (20) 6.5" LED speakers, (4) 12" LED subs',
                'Level 2 audio — (20) M2 6.5" LED speakers, (6) M2 12" LED subs',
                '(4) Beach Tower speakers on hardtop w/ amp',
                'Sirius satellite radio',
                'Mercury VesselView',
            ],
            'Fishing': [
                'Fishing transom — aft livewell w/ seat',
                'Under-gunnel racks for (8) rods',
                'Flush-mount stainless rod holders',
                'Convert under-deck lockers to fishboxes with macerator pumps',
            ],
        }}
    />
);

export default Tigress430;
