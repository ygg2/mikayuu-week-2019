// data
let day = [
  // day 1
  {
    theme: 'red',
    background: 'blood.jpg',
    flower: {
      name: 'amaryllis',
      image: ''
    },
    color: 'linear-gradient(to top, #46080b, #ff0000)',
    image: '',
    special: '<p>Day 1</p>', // click to make mika's eyes red
    anim: {
      images: ['', ''], // heart, blood vial
      enter: 'animated fadeInDown',
      leave: 'animated fadeOutUp'
    },
    quote: {
      text:
        'This time Mika didn’t answer right away, and Yuu became all too aware of how fast his heart was beating.\n“Well… You can also drink from me.”',
      fic: 'Come Crashing',
      by: 'Iriszebracorn',
      link: 'https://archiveofourown.org/works/10187756/chapters/',
      css: {
        whiteSpace: 'pre-wrap',
        color: '#550000',
        fontFamily: '"IM Fell Double Pica", serif'
      }
    }
  },
  // day 2
  {
    theme: 'orange',
    flower: {
      name: 'chrysanthemum',
      image: ''
    },
    color: '#ff764a',
    image: '',
    special: '<p>Day 2</p>',
    anim: {
      images: ['', ''],
      enter: 'animated rotateIn',
      leave: 'animated rotateOut'
    },
    quote: {
      text:
        '“You’re warm,” He breathed, burying his face in the boy’s chest and wrapping his arms around his neck.',
      fic: 'A tale of ice and fire',
      by: 'Arillow',
      link: 'https://archiveofourown.org/works/7842331/chapters/',
      css: {
        fontFamily: 'monospace'
      }
    }
  },
  // day 3
  {
    theme: 'yellow',
    flower: {
      name: 'sunflower',
      image: ''
    },
    color: 'yellow',
    image: '',
    special: '<p>Day 3</p>',
    anim: {
      images: ['', ''],
      enter: 'animated lightSpeedIn',
      leave: 'animated lightSpeedOut'
    },
    quote: {
      text: `"I'd do anything for you." His voice was rushed, desperate, almost as if he was begging for Mikaela to understand some hidden meaning in his words. "You know that."`,
      fic: 'Afire love',
      by: 'strikedawn',
      link: 'https://archiveofourown.org/works/4201602/',
      css: {
        fontFamily: '"Bentham", serif',
        fontWeight: 'lighter'
      }
    }
  },
  // day 4
  {
    // bg: set text 'are you still my family'
    theme: 'green',
    flower: {
      name: 'hydrangea',
      image: ''
    },
    color: '#80d2c2',
    image: '', // family photo
    special: '<p>Day 4</p>', // map - breaks, blood splatter on family, shadow in front appears
    anim: {
      images: ['', ''], // yuu eye, yuu sleeve & sword
      enter: 'animated flipInX',
      leave: 'animated flipOutX'
    },
    quote: {
      text:
        '“Mika, you’re family. You taught me what that meant; you showed me what it’s like to have one, a real one.”',
      fic: 'the world is cruel',
      by: 'sutera',
      link: 'https://archiveofourown.org/works/4157064',
      css: {
        textAlign: 'right'
      }
    }
  },
  // day 5
  {
    theme: 'blue',
    flower: {
      name: 'forget-me-not',
      image: ''
    },
    color: '#ccffff',
    image: '', // mika
    special: '<p>Day 5</p>',
    anim: {
      images: ['sky.jpg', ''],
      enter: 'animated rotateInUpLeft',
      leave: 'animated rotateOutDownLeft'
    },
    quote: {
      text:
        'He closed his eyes to bask in the sunlight, hoping he could open his eyes to see the blond’s eyes instead.',
      fic: 'Always with You',
      by: 'Tsukimi11',
      link: 'https://archiveofourown.org/works/11600121/chapters/26074983',
      css: {
        textAlign: 'center',
        fontWeight: 'lighter'
      }
    }
  },
  // day 6
  {
    theme: 'purple',
    background: 'stars.jpg',
    foreground: 'star_watching.png',
    flower: {
      name: 'lavender',
      image: ''
    },
    color: '#cc99ff',
    image: '', // sleepy mkys
    special: '<p>Day 6</p>',
    anim: {
      images: ['', ''],
      enter: 'animated rotateIn',
      leave: 'animated rotateOut'
    },
    quote: {
      text:
        'Relaxing into Yuu’s arms, Mika wills himself to close his eyes and just listen to Yuu’s heartbeat.',
      fic: 'Dreams',
      by: 'Lizzeroni, Phantom_Thieves, Trashy_Rina',
      link: 'https://archiveofourown.org/works/13593174',
      css: {
        color: '#ccbbff',
        fontFamily: '"Bentham", serif'
      }
    }
  },
  // day 7
  {
    theme: 'black',
    flower: {
      name: 'black dahlia',
      image: ''
    },
    color: 'linear-gradient(to bottom right, black, white)',
    image: '', // yuu seraph in white
    special: {
      text: 'Black',
      event: 6
    },
    anim: {
      images: ['', ''],
      enter: 'animated jackInTheBox',
      leave: 'animated zoomOut'
    },
    quote: {
      text:
        'The instant their eyes had met again, he’d felt a crack run through the icy walls that he’d spent four long years trapped behind.',
      fic:
        "So You're a Bloodsucking Parasitic Monster: Mika's Handy Guidebook for the Newly Turned",
      by: 'Mayasynth',
      link: 'https://archiveofourown.org/works/5642965/',
      css: {
        color: 'white'
      }
    }
  },
  // day 7 part 2
  {
    theme: 'white',
    flower: {
      name: 'lily of the valley',
      image: ''
    },
    color: 'linear-gradient(to bottom right, black, white)',
    image: '', // mika seraph in black
    special: {
      text: 'White',
      event: 7
    },
    anim: {
      images: ['', ''], // feathers
      enter: 'animated jackInTheBox',
      leave: 'animated zoomOut'
    },
    quote: {
      text:
        "“I can't believe this is real,” Yuu says with a chuckle.\n“Me either,” Mika says, and he takes Yuu’s hand simply because he can.",
      fic: 'The End',
      by: 'Sarafaith',
      link: 'https://archiveofourown.org/works/11383605',
      css: {
        whiteSpace: 'pre-wrap',
        fontFamily: '"IM Fell Double Pica", serif',
        fontWeight: 'lighter'
      }
    }
  }
]
