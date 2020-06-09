<template>
  <main class="main">
    <Logo />
    <form>

      <InputDiv>
        <h2 class="inputHeader">Smoothie name:</h2>
        <input type="text" class="inputText" v-model="name"/>
      </InputDiv>

      <InputDiv>
        <h2 class="inputHeader">Fruits:</h2>
        <div class="inputSign"> 
          <select type="text" id="inputFruit" v-model="fruit">
            <option v-for="fruit in fruits" :key="fruit.id" :value="fruit">
              {{ fruit.name }}
            </option>
          </select>
          <button v-on:click="addFruit" id="plusButton" type="button">
            <i class="fas fa-plus plusIcon"></i>
          </button>
          <p v-if="alertAdded" id="alert">added!</p>
        </div>
      </InputDiv>

      <InputDiv>
        <h2 class="inputHeader">Liquid:</h2>
        <select type="text" class="selectLarge" v-model="liquid">
           <option v-for="liquid in liquids" :key="liquid.id" :value="liquid">
              {{ liquid.name }}
            </option>
        </select>
      </InputDiv>

      <InputDiv>
        <h2 class="inputHeader">Protein:</h2>
        <select type="text" class="selectLarge" v-model="protein">
           <option v-for="protein in proteins" :key="protein.id" :value="protein">
              {{ protein.name }}
            </option>
        </select>
      </InputDiv>

      <InputDiv>
        <h2 class="inputHeader">Taste:</h2>
        <div class="inputSign">
          <input type="number" id="taste" v-model="taste"/>
          <span>%</span>
          <i class="fas fa-fire-alt flameIcon" />
        </div>
      </InputDiv>
      <p v-if="alert">Taste should be a number between 0 and 100</p>
      <p v-if="secondAlert">Please, complete all fields</p>
      <InputDiv>
      <button id="buttonList" v-on:click="sendSmoothie">
        Save it!
      </button>
      </InputDiv>
    </form>
  </main >
</template>
<script>
import Logo from '../components/Logo'
import InputDiv from '../components/InputDiv'
export default {
  name: 'Smoothie',
  components: {
    'Logo': Logo,
    'InputDiv': InputDiv
  },
  data: function(){
    return {
      urlIngredients: 'https://obscure-coast-72339.herokuapp.com/ingredients',
      urlSmoothies: 'https://obscure-coast-72339.herokuapp.com/smoothies',
      urlDemo: 'http://localhost:5000/smoothies',
      name: '',
      fruits: null,
      liquids: null,
      proteins: null,
      fruit: '',
      liquid: '',
      protein: '',
      selectedFruit: [],
      taste: 0,
      sign: '%',
      alert: false,
      secondAlert: false,
      alertAdded: false
    }
  },
  mounted() {
    fetch(this.urlIngredients)
      .then((response) => {
        response.json().then((data) => {
          const { fruits, liquids, proteins } = data
          this.fruits = fruits
          this.liquids = liquids
          this.proteins = proteins
        })
      })
  },
  methods: {
    addFruit() {
      if (this.selectedFruit.includes(this.fruit)) {
        console.log('fruit already included')
        return
      } 
      const { name, value } = this.fruit
      const newValue = {
        name,
        value: parseInt(value)
      }
      // edits
      this.selectedFruit.push(newValue)
      this.alertAdded = true
      setTimeout(() => {
        this.alertAdded = false
      }, 2000)

    },
    async sendSmoothie(){
      if (this.taste > 100 || this.taste < 0) {
        this.alert = true
        setTimeout(() => {
          this.alert = false
        }, 3000)
        return
      } else if (this.name === '' || this.liquid === '' || this.protein === '' || this.selectedFruit.length === 0) {
        this.secondAlert = true
        setTimeout(() => {
          this.secondAlert = false
        }, 3000)
        return
      }
      try {
        const smoothie = {
          name: this.name,
          fruits: this.selectedFruit,
          liquid: this.liquid,
          protein: this.protein,
          taste: this.taste
        }

        const jsoned = JSON.stringify(smoothie)
        const response = await fetch(this.urlSmoothies, {
          method: 'POST',
          mode: 'cors',
          cache: 'no-cache',
          headers: {
            'Content-Type': 'application/json'
          },
          body: jsoned
        }).catch(err => console.error(err))
        console.log(response.json())
        this.$router.push('/smoothies')
      } catch (error) {
        console.error('error sending smoothie to server', error)
      }
    }
  }
}
</script>
<style scoped>
  .inputHeader {
    font-size: 1.2em;
    margin-bottom: 5px;
  }
  .inputText {
    border-radius: 5px;
    padding: 8px;
    width: 200px;
    margin: 5px 0;
    border: 1px solid #999;
    box-shadow: 1px 1px 5px #999;
  }

  .inputSign {
    display: flex;
    justify-content: left;
    align-items: center;
    flex-wrap: wrap;
  }

  #inputFruit {
    border-radius: 5px;
    padding: 8px;
    width: 50;
    margin: 5px 0;
    border: 1px solid #999;
    box-shadow: 1px 1px 5px #999;
  }

  .plusIcon {
    margin: 0px 22px;
    color: lawngreen;
    font-size: 2em;
  }

  #plusButton {
    border: none;
    background-color: white;
    cursor: pointer;
  }

  .selectLarge {
    border-radius: 5px;
    padding: 8px;
    width: 200;
    margin: 5px 0;
    border: 1px solid #999;
    box-shadow: 1px 1px 5px #999;
  }

  #taste {
    border: 1px solid #999;
    padding: 8px;
    border-radius: 5px;
    width: 40px;
  }

  .flameIcon {
    color: tomato;
    font-size: 2em;
    margin-left: 20px;
  }

  #alert {
    margin-left: 10px;
    color: lawngreen;
  }
</style>