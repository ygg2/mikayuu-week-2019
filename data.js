// data
// %done:  11/47
// red:    5/7
// orange: 0/5
// yellow: 0/5
// green:  1/8
// blue:   2/5
// purple: 2/7
// black:  0/5
// white:  1/5
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
    special: {
      image: 'mika_eyes_blue.jpg',
      image2: 'mika_eyes_red.jpg',
      event: 1
    },
    anim: {
      images: ['heart.jpg', 'yuu_heart.jpg'], // heart, blood vial
      enter: 'animated flipInY',
      leave: 'animated flipOutY'
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
      image: 'test.jpg',
    },
    color: '#ff764a',
    image: 'test.jpg',
    special: {
    },
    anim: {
      images: ['test.jpg', 'test.jpg'],
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
      image: 'test.jpg'
    },
    color: '#ffffcc',
    image: 'test.jpg',
    special: {},
    anim: {
      images: ['test.jpg', 'test.jpg'],
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
        fontWeight: 'lighter',
        lineHeight: '1.2'
      }
    }
  },
  // day 4
  {
    theme: 'green',
    flower: {
      name: 'hydrangea',
      image: 'test.jpg'
    },
    color: '#80d2c2',
    image: 'test.jpg', // family photo
    special: {
      image: '', // map
      event: 4
    },
    anim: {
      images: ['test.jpg', 'test.jpg'], // yuu eye, yuu sleeve & sword
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
        color: '#ecd6b5',
        textAlign: 'center',
        fontFamily: '"IM Fell Double Pica", serif',
        fontWeight: 'lighter'
      }
    }
  },
  // day 5
  {
    theme: 'blue',
    flower: {
      name: 'forget-me-not',
      image: 'test.jpg'
    },
    color: '#ccffff',
    image: 'test.jpg', // mika
    special: {
      image: 'twelve_to_one.png'
    }, // only has an event that lanuches a flying yuu
    anim: {
      images: ['sky.jpg', 'promise.png'],
      enter: 'animated fadeInUp',
      leave: 'animated fadeOut'
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
      image: 'test.jpg'
    },
    color: '#cc99ff',
    image: 'test.jpg', // sleepy mkys
    special: {
      image: ''
    },
    anim: {
      images: ['test.jpg', 'test.jpg'],
      enter: 'animated rotateInUpLeft',
      leave: 'animated rotateOutDownLeft'
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
      image: 'test.jpg'
    },
    color: 'linear-gradient(to bottom right, black, white)',
    image: 'test.jpg', // yuu seraph in white
    special: {
      text: 'Black',
      event: 6
    },
    anim: {
      images: ['test.jpg', 'test.jpg'],
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
      image: 'test.jpg'
    },
    color: 'linear-gradient(to bottom right, black, white)',
    image: 'test.jpg', // mika seraph in black
    special: {
      text: 'White',
      event: 7
    },
    anim: {
      images: ['feathers.jpg', 'test.jpg'], // feathers
      enter: 'animated jackInTheBox',
      leave: 'animated zoomOut'
    },
    quote: {
      text:
        "“I can't believe this is real,” Yuu says with a chuckle.\n\n“Me either,” Mika says, and he takes Yuu’s hand simply because he can.",
      fic: 'The End',
      by: 'Sarafaith',
      link: 'https://archiveofourown.org/works/11383605',
      css: {
        whiteSpace: 'pre-wrap',
      }
    }
  }
]
