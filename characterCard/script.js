const character = {
      name: "Sidiousa",
      class: "Sith Space Witch",
      level: 5,
      health: 100,
      image: 'C:\Users\knigh\Documents\Dynamic-web\characterCard\openart-image_v79GCcJX_1749748070816_raw.jpg',
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
      }
    };

    function SetInfo(characters)
    {
        const characterName = document.querySelector("#name");
        characterName.textContent = characters.name;

        const characterClass = document.querySelector("#class");
        characterClass.textContent = characters.class;

        const characterlevel = document.querySelector("#level");
        characterlevel.textContent = characters.level;

        const characterHealth = document.querySelector("#health");
        characterHealth.textContent = characters.health;

        
    }

