// get current day
let day_offset = 3
//let today = new Date().getDay() + day_offset
let today = 0

// load from hash
let _hash = parseInt(window.location.hash.slice(1), 10);
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
  <div class="tile is-child box">
    <img :src="flower.image" :alt="flower.name">
  </div>
  `
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
  <div class="tile is-child box" :style="{ background: color }">
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
  <div class="tile is-child box" style="padding: 0; overflow: hidden">
    <img :src="image" alt="mikayuu drawing" class="cover-tile">
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
  <div class="tile is-child box" style="padding: 0;">
    <button class="button cover-tile" @click="eventPerform(special.event)">
      <img v-if="special.image"></img>
      <p v-if="special.text">{{ special.text }}</p>
    </button>
  </div>
  `,
  methods: {
    eventPerform(event) {
      switch(event) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
          app.setDay(1)
          break
        case 7:
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
    <div :style="fixed">
      <img :src="anim.images[0]" alt="animation 1" class="cover-tile">
    </div>
    <transition
      :enter-active-class="anim.enter"
      :leave-active-class="anim.leave"
    >
      <div v-show="hovered" :style="fixed">
        <img :src="anim.images[1]" alt="animation 2" class="cover-tile">
      </div>
    </transition>
  </div>
  `,
  data() {
    return {
      hovered: false,
      hoverable: true,
      fixed: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%'
      }
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
