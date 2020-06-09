<template>
  <main class="main">
    <Logo />
    <form>

      <InputDiv>
        <h2 class="inputHeader">Smoothie name:</h2>
        <input type="text" class="inputText"/>
      </InputDiv>

      <InputDiv>
        <h2 class="inputHeader">Fruits:</h2>
        <div class="inputSign"> 
          <select type="text" id="inputFruit" v-model="fruit">
            <option v-for="fruit in fruits" :key="fruit.id" :value="fruit.name">
              {{ fruit.name }}
            </option>
          </select>
          <button v-on:click="addFruit" id="plusButton">
            <i class="fas fa-plus plusIcon"></i>
          </button>
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
          <span id="taste">{{ taste }} %</span>
          <i class="fas fa-fire-alt flameIcon" />
        </div>
      </InputDiv>
      <InputDiv>
      <button id="buttonList">
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
      fruits: null,
      liquids: null,
      proteins: null,
      fruit: '',
      liquid: '',
      protein: '',
      selectedFruit: [],
      taste: 0
    }
  },
  mounted() {
    fetch('https://obscure-coast-72339.herokuapp.com/ingredients')
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
      this.selectedFruit.push(this.fruit)
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
  }

  .flameIcon {
    color: tomato;
    font-size: 2em;
    margin-left: 20px;
  }
</style>