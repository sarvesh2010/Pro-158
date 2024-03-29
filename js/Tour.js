AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards()
    
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "hulk",
        title: "Hulk",
        url: "./assets/thumbnails/1.jpg",
      },
      {
        id: "spider",
        title: "Spider Man",
        url: "./assets/thumbnails/2.jpg",
      },

      {
        id: "america",
        title: "Captain America",
        url: "./assets/thumbnails/3.jpg",
      },
      {
        id: "avengers",
        title: "Avengers",
        url: "./assets/thumbnails/4.jpg",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl = this.createBorder(position,item.id)
      // Thumbnail Element
      const thumbnail = this.createThumbnail(item)
      borderEl.appendChild(thumbnail)
      // Title Text Element
      const titleEl = this.createTitleEl(position, item)
      borderEl.appendChild(titleEl)

      this.placesContainer.appendChild(borderEl);
    }
  },
  
  createBorder: function (position, id) {
    const entityEl = document.createElement('a-entity')
    entityEl.setAttribute('id', id)
    entityEl.setAttribute('visible', true)
    entityEl.setAttribute('geometry', {
      primitive: 'ring',
      radiusInner: 9,
      radiusOuter: 10,
    })
    entityEl.setAttribute('position', position)
    entityEl.setAttribute('material', {
      color: '#0077CC',
      opacity: 1,
    })
    return entityEl
  },

  createThumbnail: function (item) {
    const entityEl = document.createElement('a-entity')
    entityEl.setAttribute('visible', true)
    entityEl.setAttribute('geometry', {
      primitive: 'circle',
      radius:9,
    })
    entityEl.setAttribute('material', {
      src:item.url,
    })

    return entityEl
  },

  createTitleEl : function(position,item) {
    const entityEl = document.createElement('a-entity')
    entityEl.setAttribute('text', {
      font: 'exo2bold',
      align: 'center',
      width: 70,
      color: '#E65100',
      value: item.title,
    })
    const elposition = position
    elposition.y = -20
    entityEl.setAttribute('position', elposition)
    entityEl.setAttribute('visible', true)
    return entityEl
    
  },

});
