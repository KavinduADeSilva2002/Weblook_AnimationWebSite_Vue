<template>
  <section id="rules" class="section" data-aos="fade-left">
    <h2 class="section-title">Rules</h2>
    <div class="rules-container">
      <div 
        v-for="(rule, index) in rules" 
        :key="index"
        class="rule-section" 
        data-aos="fade-up" 
        :data-aos-delay="100 * (index + 1)"
        @mousemove="handleMouseMove"
        @mouseleave="handleMouseLeave"
        :ref="el => ruleElements[index] = el"
      >
        <h3>{{ rule.title }}</h3>
        <template v-if="rule.items">
          <ul>
            <li v-for="(item, i) in rule.items" :key="i">{{ item }}</li>
          </ul>
        </template>
        <p v-else>{{ rule.content }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const ruleElements = ref([])

onMounted(() => {
  // Initialize any needed functionality when component mounts
  console.log('Rules section mounted')
})

const rules = [
  {
    title: 'Game Objective',
    content: 'Score 11 points first (must win by at least 2 points).'
  },
  {
    title: 'Serving the Ball',
    items: [
      'The ball must rest on an open palm, tossed at least 16 cm vertically, then struck behind the end line.',
      'The serve must bounce once on each side of the table.'
    ]
  },
  {
    title: 'Service Rotation',
    items: [
      'Players serve 2 points each, then switch servers.',
      'At 10-10 (deuce), serve alternates after every point.'
    ]
  },
  {
    title: 'Scoring a Point',
    content: 'A player scores when:',
    items: [
      'The opponent misses the ball.',
      'The opponent hits the net or outside the table.',
      'The opponent double hits or strikes the ball before it bounces.'
    ]
  },
  {
    title: 'Legal Return',
    items: [
      'After the serve or return, the ball must bounce once on the opponent\'s side.',
      'Volleys (hitting before bounce) are not allowed.'
    ]
  },
  {
    title: 'Let Serve',
    content: 'If the serve hits the net but lands correctly, it\'s called a let and is replayed.'
  },
  {
    title: 'Winning the Match',
    content: 'Usually played as best of 5 or 7 games.'
  },
  {
    title: 'Doubles Rules',
    items: [
      'Partners must alternate shots.',
      'Serve must go from right box to right box.'
    ]
  },
  {
    title: 'Touching the Table or Net',
    content: 'You lose the point if you touch the table or net with your hand or body.'
  },
  {
    title: 'Ball in Play',
    content: 'Rally continues until a fault is made.'
  }
]

const handleMouseMove = (e) => {
  const card = e.currentTarget
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  
  const rotateX = (y - centerY) / 10
  const rotateY = -(x - centerX) / 10

  card.style.transform = `
    perspective(1000px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    scale3d(1.05, 1.05, 1.05)
  `
}

const handleMouseLeave = (e) => {
  const card = e.currentTarget
  card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)'
}
</script>
