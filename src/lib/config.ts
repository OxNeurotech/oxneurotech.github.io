export const navbar = {
	logo_text: 'OxNeurotech'
};

// if you dont want it, just set it to an empty string
export const socials = {
	text_on_right: 'OxNeurotech',
	linkedin: `https://www.linkedin.com/company/oxneurotech`,
	github: `https://github.com/OxNeurotech/`,
	mail: `mailto: oxneurotech@gmail.com`
};

export const hi = {
	section_id: `Landing`,
	statement: `THE FUTURE OF NEUROTECH @ OXFORD`,
	button: {
		text: `Join us!`,
		href: socials.mail,
	}
};

export const about = {
	section_title: 'About',
	section_id: 'About',
	paragraphs: [
		`Founded in June 2023, OxNeurotech is Oxford University's student-led society dedicated to advancing the field of neurotechnology,
		 the first within the UK.`,
		`We bring together students from diverse backgrounds in neuroscience, computer science, physics, engineering, and beyond,
		 as we aim to provide a collaborative platform for exploring the intersection between brain science and technology. We do this through:`,
	],
	services: [
		`Hands-on Projects`,
		`Technical Workshops`,
		`Hackathons`,
		`Speaker Events`
	]
};

export const projects = {
	section_title: 'Projects',
	section_id: 'Projects',
	list: [
		{
			project: 'TrueCadence',
			competition: '@ London Neurohack 2025',
			when: 'Jan 2025',
			description: 'A neuro-adaptive YouTube playback speed control system.',
			href: 'https://github.com/OxNeurotech/True-Cadence',
			points: [
				'Identified an EEG biomarker for cognitive load.',
				'Applied a fuzzy controller for real-time control of cognitive load.',
				'Successful testing on multiple ( ~ 10 ) participants at the hackathon.',
				'Built using the OpenBCI Ultracortex Mark IV.'
			]
		},
		{
			project: 'Project Music',
			competition: '',
			when: 'Feb 2024 - Feb 2025',
			description: 'An EEG-based music recommender.',
			href: 'https://github.com/OxNeurotech/project-music',
			points: [
				"Interfaced with the Spotify API to use song attributes as data for recommendations.",
				'Identified EEG biomarkers for song engagement based off research from NIH.',
				'Developed SVM-based algorithms to predict whether a song will be liked.',
			]
		},
		{
			project: 'Dream Painting',
			competition: '@ g.tec Spring School Hackathon 2024',
			when: 'Mar 2024',
			description: 'Using dream EEG data for generative art.',
			href: 'https://github.com/OxNeurotech/Dream-Painting',
			points: [
				"Inspired by DreamDiffusion (Bai et al., 2024).",
				'Modified the diffusion model to work with the Neurosity Crown.'
			]
		},
	]
};

export const events = {
	section_title: 'Events',
	section_id: 'Events',
	list: [
		{
			title: 'Speaker Event: Neurotechnology to Map Structure & Function in the Brain',
			points: [
				'by Prof. Andreas Schaefer',
				'Co-organised with the Cortex Club'
			],
			tools: ['03 Jun 2026'],
		},
		{
			title: 'Speaker Event: The Science of Stress and the Rise of Neuromodulation',
			points: [
				'by Vitalijus Majorovas & Dr. Jonė Pukėnaitė',
				'Co-organised with EnSpire Oxford & Pulsetto'
			],
			tools: ['21 May 2026'],
		},
		{
			title: 'Speaker Event: OPM-izing How We See the Brain',
			points: [
				'by Caroline Nettekoven & Beatriz Silveira de Arruda',
				'Quantum sensors for magnetoencephalography',
				'Co-organised with the Cortex Club'
			],
			tools: ['27 Feb 2026'],
		},
		{
			title: 'Neurotech in Clinic',
			points: [
				'by Sheikh Momin & Rachel Crockett',
				'Ultrasound, deep brain stimulation & more',
				"Hosted at St Hilda's College"
			],
			tools: ['04 Dec 2025'],
		},
		{
			title: 'Speaker Event: Unlocking Cognition with BCIs',
			points: [
				'by Prof. Marcus Kaiser',
				'BCIs, non-invasive stimulation & machine learning'
			],
			tools: ['07 Nov 2025'],
		},
        {
            title: 'Neurotech Social',
            points: [
                "Drinks & Neurotech at King's Arms Pub!"
            ],
            tools: ['28 Oct 2025'],
        },
        {
            title: 'Brains & AI',
            points: [
                'by Zohar Bronfman',
                'Co-organised with OXAI, Oxford Founders Society & Oxford Biohacking Society',
            ],
            tools: ['22 Oct 2025'],
        },
        {
            title:'Neurotech Intro',
            points: [
                'Dr. Joe Troughton, Dr. Birtan Demirel, Dr. Katherine Tourigny, Ioan Whomsley, & more!'
            ],
            tools: ['15 Oct 2025'],
        },
		{
			title: 'Speaker Event: The New Physics of Neurons',
			points: [
				'by Prof. Sonia Contera.',
				'Co-organised with the OUPS.',
			],
			tools: ['06 Feb 2025'],
		},
		{
			title: 'Speaker Event: The Hacker Mindset',
			points: [
				'by Zelda Poem',
				'Co-organised with Oxford Entrepreneurs & Oxford Founders Society'
			],
			tools: ['29 Jan 2025'],
		},
		{
			title: 'Speaker Event: Embodied-AI Solutions for Healthcare and Wearable Robotics',
			points: [
				"by Prof. Liang He",
				'Co-organised with OxRAM & OUPS'
			],
			tools: ['27 Nov 2024'],
		},
		{
			title: 'Workshops Series: Intro to BCIs',
			points: [
				"by John Lee",
				'BCI foundations & Python for EEG analysis'
			],
			tools: ['30 Oct 2024 - 20 Nov 2024'],
		}
	]
};

import zhiyu_zheng_img from "$lib/images/zhiyu_zheng.jpg";
import mattan_pelah_img from "$lib/images/mattan_pelah.jpg";
import daniel_costache_img from "$lib/images/daniel_costache.jpg";
import sarah_schreiber_img from "$lib/images/sarah_schreiber.png";
import john_lee_img from "$lib/images/john_lee.jpg";
import rick_longley_img from "$lib/images/rick_longley.jpg";
import manuel_san_silvestre_img from "$lib/images/manuel_san_silvestre.png";
import joseph_balfe_img from "$lib/images/joseph_balfe.png";
import leanne_mabena_img from "$lib/images/leanne_mabena.jpeg";
import mia_gemayel_img from "$lib/images/mia_gemayel.jpeg";
import sheen_bendon_img from "$lib/images/sheen_bendon.jpeg";
import david_nimrichtr_img from "$lib/images/david_nimrichtr.jpeg";

export const team = {
	section_title: 'Team',
	section_id: 'Team',
	senior_title: 'Senior Committee',
	list: [
		{
			img_ref: mattan_pelah_img,
			role: 'President, Founder',
			name: 'Mattan Pelah',
			about: 'Y2 DPhil Neuroengineering',
			social: 'https://www.linkedin.com/in/mattan-pelah/',
		},
		{
			img_ref: mia_gemayel_img,
			role: 'VP of Events',
			name: 'Mia Gemayel',
			about: 'Y2 DPhil Neuropharmacology',
			social: 'https://www.linkedin.com/in/mia-gemayel-07a517252/',
		},
		{
			img_ref: manuel_san_silvestre_img,
			role: 'VP of Sponsorships',
			name: 'Manuel San Silvestre, MD',
			about: 'Y2 MS Neuroscience',
			social: 'https://www.linkedin.com/in/manuel-rico-fernandez-san-silvestre/',
		},
		{
			img_ref: sarah_schreiber_img,
			role: 'Treasurer, Founder',
			name: 'Sarah Schreiber',
			about: 'Y1 DPhil Clinical Neuroscience',
			social: 'https://www.linkedin.com/in/sarah-schreiber-388587375/',
		},
		{
			img_ref: leanne_mabena_img,
			role: 'Secretary',
			name: 'Leanne Mabena',
			about: 'Y3 MBBS',
			social: 'https://www.linkedin.com/in/leanne-mabena-28a0a22a3/',
		},
		{
			img_ref: joseph_balfe_img,
			role: 'Welfare Officer',
			name: 'Joseph Balfe',
			about: 'Y3 DPhil Psychiatry',
			social: 'https://www.linkedin.com/in/joseph-balfe-09a3081a8/',
		},
		{
			img_ref: sheen_bendon_img,
			role: 'Merchandise Officer',
			name: 'Sheen Bendon',
			about: 'Y4 MS Physics',
			social: 'https://www.linkedin.com/in/sheen-bendon-a79358251/',
		},
		{
			img_ref: david_nimrichtr_img,
			role: 'IT Officer',
			name: 'David Theodor Nimrichtr',
			about: 'Y2 MS Biomedical Sciences',
			social: 'https://www.linkedin.com/in/david-theodor-nimrichtr/',
		},
	],
	senior_list: [
		{
			img_ref: zhiyu_zheng_img,
			role: 'President, Founder',
			name: 'Zhiyu Zheng (Jerry)',
			about: 'Y4 DPhil Clinical Neurosciences',
			social: 'https://www.linkedin.com/in/zzyicl/',
		},
		{
			img_ref: mattan_pelah_img,
			role: 'Secretary, Founder',
			name: 'Mattan Pelah',
			about: 'Y2 DPhil Neuroengineering',
			social: 'https://www.linkedin.com/in/mattan-pelah/',
		},
		{
			img_ref: daniel_costache_img,
			role: 'Treasurer, Founder',
			name: 'Daniel Costache',
			about: 'Y4 MEng Engineering Science',
			social: 'https://www.linkedin.com/in/costache-daniel/',
		},
		{
			img_ref: sarah_schreiber_img,
			role: 'Events Officer, Founder',
			name: 'Sarah Schreiber',
			about: 'Y1 DPhil Clinical Neuroscience',
			social: 'https://www.linkedin.com/in/sarah-schreiber-388587375/',
		},
		{
			img_ref: john_lee_img,
			role: 'Senior Advisor, Founder',
			name: 'John Lee',
			about: 'Alum MEng Engineering Science',
			social: 'https://www.linkedin.com/in/lee-chih-jung/',
		},
		{
			img_ref: rick_longley_img,
			role: 'Senior Advisor, Founder',
			name: 'Rick Longley',
			about: 'Alum BA Experimental Psych.',
			social: 'https://www.linkedin.com/in/rick-longley/'
		},
	]
};

export const signup = {
	section_title: 'Signup',
	section_id: 'Signup',
	paragraphs: [
		`🛠️ We are currently setting up an easier way to sign up to our newsletter.`,
		`In the meantime, email us about your interest in joining OxNeurotech and we will get back to you!`
	],
	button: {
		text: `Email us!`,
		href: "mailto: oxneurotech@gmail.com"
	}
};

export const contact = {
	section_title: 'Contact',
	section_id: 'Contact',
	paragraphs: [
		`Address:`,
		`St Hilda's College, Cowley Place, Oxford, OX4 1DY`,
	],
	button: {
		text: `Email me!`,
		href: "mailto: oxneurotech@gmail.com"
	}
};
