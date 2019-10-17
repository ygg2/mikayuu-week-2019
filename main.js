// get current day
let day_offset = 3
let today = new Date().getDay() + day_offset
if (today >= 7) today -= 7
today = 6
// load from hash
let _hash = parseInt(window.location.hash.slice(1), 10)
if (_hash != NaN && _hash > 0 && _hash < 8) {
  today = _hash - 1
}

// flower, top left
Vue.component('mikayuu-flower', {
  props: {
    flower: {
      type: Object,
      required: true
    }
  },
  template: `
  <div class="tile is-child box is-filled">
    <button
      class="button no-background cover-tile flower"
      @click="toggleContent"
      :style="fullBackground">
      <transition
        enter-active-class="animated slideInDown faster"
        leave-active-class="animated slideOutUp faster"
      >
        <div
          v-show="active"
          class="fixed level is-mobile"
          style="background-color: #00000077"
        >
          <div class="level-item">
            <div>
              <p class="title is-4 has-text-white">{{ flower.name }}</p>
              <p class="has-text-white" style="white-space: pre-wrap">{{ flower.description }}</p>
            </div>
          </div>
        </div>
      </transition>
    </button>
  </div>
  `,
  data() {
    return {
      active: false
    }
  },
  methods: {
    toggleContent() {
      this.active = !this.active
    }
  },
  computed: {
    fullBackground() {
      return {
        backgroundOrigin: 'padding-box',
        backgroundImage: `url(./${this.flower.image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }
    }
  }
})

// color, bottom left
Vue.component('mikayuu-color', {
  props: {
    color: {
      type: String,
      required: true
    }
  },
  template: `
  <div class="tile is-child box is-filled color" :style="{ background: color }">
  </div>
  `
})

// image, center
Vue.component('mikayuu-image', {
  props: {
    image: {
      type: String,
      required: true
    }
  },
  template: `
  <div class="tile is-child box is-filled">
    <img :src="image" alt="placeholder" class="cover-tile">
  </div>
  `
})

// special, center top
Vue.component('mikayuu-special', {
  props: {
    special: {
      type: Object,
      required: true
    }
  },
  template: `
  <div class="tile is-child box is-filled">
    <button class="spec button cover-tile" @click="eventPerform(special.event)">
      <img v-if="special.image" :src="special.image" class="cover-tile">
      <div class="fixed">
        <transition enter-active-class="animated fadeIn">
          <img v-if="secondImage" :src="special.image2" class="cover-tile">
        </transition>
      </div>
      <p v-if="special.text">{{ special.text }}</p>
    </button>
  </div>
  `,
  data() {
    return {
      hasEffect: false,
      secondImage: false,
      yuuLaunched: false,
      yuuCounter: 0
    }
  },
  methods: {
    eventPerform(event) {
      switch (event) {
        case 1:
          this.secondImage = true
          break
        case 2:
          if (this.hasEffect) break
          this.hasEffect = true
          app.day.anim.images = app.day.anim.images.map(
            img => img.slice(0, -4) + '_shadow.jpg'
          )
          break
        case 3:
          let tiles = document.getElementById('mikayuu-tiles')
          tiles.classList.add('become-color')
          break
        case 4:
          app.day.specText = 'are you still my family?'
          app.day.theme = 'dark-green'
          app.day.image = 'family2.jpg'
          this.secondImage = true
          break
        case 5:
          if (!this.yuuLaunched) {
            let transitions = [
              ['fadeInDown', 'fadeOutLeft'],
              ['rollIn', 'rollOut'],
              ['zoomInRight', 'zoomOutDown'],
              ['bounceInUp', 'bounceOutUp']
            ]
            let yuu = new Image()
            yuu.style.position = 'fixed'
            yuu.style.maxHeight = '50%'
            yuu.style.top = `${Math.floor(Math.random() * 50)}%`
            yuu.style.left = `${Math.floor(Math.random() * 70)}%`
            yuu.className = 'animated ' + transitions[this.yuuCounter][0]
            yuu.src = 'flyuu.png'
            document.getElementById('yuu-launcher').appendChild(yuu)
            this.yuuLaunched = true
            setTimeout(() => {
              yuu.className = 'animated ' + transitions[this.yuuCounter][1]
              this.yuuCounter++
              if (this.yuuCounter >= transitions.length) {
                this.yuuCounter = 0
              }
              this.yuuLaunched = false
              setTimeout(() => {
                yuu.remove()
              }, 900)
            }, 900)
          }
          break
        case 6:
          if (!this.hasEffect) {
            setInterval(()=> {
              let star = new Image()
              star.style.position = 'absolute'
              star.style.left = `${Math.floor(Math.random() * 100)}%`
              star.className = 'starAnim'
              let _remove = () => { star.remove() }
              star.addEventListener('webkitAnimationEnd', _remove)
              star.addEventListener('animationend', _remove)
              star.src = 'star.png'
              document.getElementById('special-effects').appendChild(star)
            }, 600)
            this.hasEffect = true
          }
          break
        case 7:
          app.setDay(1)
          break
        case 8:
          app.setDay(-1)
          break
      }
    }
  }
})

// anim, center bottom
Vue.component('mikayuu-anim', {
  props: {
    anim: {
      type: Object,
      required: true
    }
  },
  template: `
  <div class="tile is-child box expand-tile"
    @mouseenter="hover" @mouseleave="unhover"
  >
    <div class="fixed">
      <img :src="anim.images[0]" alt="animation 1" class="cover-tile">
    </div>
    <transition
      :enter-active-class="anim.enter"
      :leave-active-class="anim.leave"
    >
      <div v-show="hovered" class="fixed">
        <img :src="anim.images[1]" alt="animation 2" class="cover-tile">
      </div>
    </transition>
  </div>
  `,
  data() {
    return {
      hovered: false,
      hoverable: true
    }
  },
  methods: {
    hover() {
      if (this.hoverable) {
        this.hovered = true
        this.hoverable = false
        setTimeout(() => {
          this.hoverable = true
        }, 300)
      }
    },
    unhover() {
      if (this.hoverable) {
        this.hovered = false
      }
    }
  }
})

// quote, bottom right
Vue.component('mikayuu-quote', {
  props: {
    quote: {
      type: Object,
      required: true
    }
  },
  template: `
  <div class="tile is-child box">
    <div class="level" style="min-height:80%">
    <div class="content">
      <p class="title is-5" :style="css">{{ quote.text }}</p>
      <p class="subtitle is-7 is-italic" style="margin-top: 1em">
        <a :href="quote.link">{{ quote.fic }}</a>
        by {{ quote.by }}
      </p>
    </div>
    </div>
  </div>
  `,
  computed: {
    css() {
      return this.quote.css ? this.quote.css : {}
    }
  }
})

var app = new Vue({
  el: '#app',
  data: {
    day: day[today]
  },
  methods: {
    setDay(num) {
      today += num
      this.day = day[today]
    }
  }
})
