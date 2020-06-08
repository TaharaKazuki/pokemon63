import Vue, { CreateElement, VNode } from 'vue'
import * as tsx from 'vue-tsx-support'
import { Pokemon } from '~/types/struct'

export const TheRecordQuestion = tsx.component({
  name: 'TheRecordQuestion',
  props: {
    choice: Array as () => number[],
    party: Array as () => Pokemon[],
  },
  methods: {
    choosePokemon(index: number, pokemon: Pokemon) {
      this.$emit('choose', {
        index,
        pokemon,
      })
    },
    buttonClass(index: number, pokemon: Pokemon) {
      let rounded = ''
      switch (index) {
        case 0: {
          rounded = 'rounded-l'
          break
        }

        case 1: {
          rounded = 'border-l-0 border-r-0'
          break
        }

        case 2: {
          rounded = 'rounded-r'
          break
        }
      }
      const base = 'inline-block outline-none border border-gray-600 ' + rounded
      // if (this.choice[index] === pokemon.slug) {
      //   return `${base} text-white bg-blue-600`
      // } else {
      //   return `${base} focus:bg-gray-700 hover:bg-gray-700`
      // }
    },
  },
  render() {
    return (
      <div class="w-1/2">
        {(this.$slots as any).default}
        <ul>
          {this.party.map((pokemon) => (
            <li class="flex items-end">
              <div class="w-3/5 flex items-end justify-start">
                <img
                  style={{
                    width: '60px',
                    height: '50px',
                    imageRendering: 'pixelated',
                  }}
                  class="mr-3 object-cover object-center-bottom"
                  src={`/pokemon63/static/images/icons/${pokemon.slug}.png`}
                  alt=""
                />
                <p class="pb-3 font-bold text-lg">
                  {pokemon.name_jpn.split('(')[0]}
                </p>
              </div>
              <div class="w-2/5">
                <div class="flex">
                  {new Array(3).fill(0).map((_, i) => (
                    <button
                      type="button"
                      style="width: 2.5rem; height: 2.5rem;"
                      class={this.buttonClass(i, pokemon)}
                      onClick={() => {
                        this.choosePokemon(i, pokemon)
                      }}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  },
})
