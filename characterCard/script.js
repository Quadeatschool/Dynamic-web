const character = {
      name: "Sidiousa",
      class: "Sith Space Witch",
      level: 5,
      health: 100,
      image: 'openart-image_v79GCcJX_1749748070816_raw.jpg',
      attacked() {
        if (this.health >= 20) {
          this.level -= 1;
          this.health -= 20;
          
        } else {
            alert('Character Died');
        }
      },
      levelUp() {
        this.level += 1;
        this.health += 20;
        // CharacterRendering(this);
      }
    };

    function SetInfo(characters)
    {
        const characterName = document.querySelector(".name");
        characterName.textContent = characters.name;

        const characterClass = document.querySelector("#class");
        characterClass.textContent = characters.class;

        const characterlevel = document.querySelector("#level");
        characterlevel.textContent = characters.level;

        const characterHealth = document.querySelector("#health");
        characterHealth.textContent = characters.health;

        const characterImage = document.querySelector(".image");
        characterImage.src = characters.image;
    }

//--------------------------------------------

    function CharacterRendering(characters)
    {
        document.querySelector(".name").innerHTML = `<p>${characters.name}<p>`;
        document.querySelector("#class").innerText = characters.class;
        document.querySelector("#level").innerText = characters.level;
        document.querySelector("#health").innerText = characters.health;
    }

document.querySelector("#attacked").addEventListener("click", function()
{
    character.attacked();
    CharacterRendering(character);
});

document.querySelector("#levelup").addEventListener("click", function()
{
    character.levelUp();
    CharacterRendering(character);
});

SetInfo(character);
CharacterRendering(character);