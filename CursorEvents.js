AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" },
    },
    init: function () {
      this.handleMouseEnterEvents();
      this.handleMouseLeaveEvents();
    },
    handlePlacesListState: function () {
      const id = this.el.getAttribute("id");
      const postersId = ["Superman", "spiderman", "captain-area", "outer-space"];
      if (postersId.includes(id)) {
        const postersContainer = document.querySelector("#posters-container");
        postersContainer.setAttribute("cursor-listener", {
          selectedItemId: id,
        });
        this.el.setAttribute("material", {
          color: "#D76B30",
          opacity: 1,
        });
      }
    },
    handleMouseEnterEvents: function () {
      this.el.addEventListener("mouseenter",()=>{
        const id = this.el.getAttribute("id");
        const postersId=[
          "Superman", 
          "spiderman", 
          "captain-area",
          "outer-space",
        ];
        if (postersId.includes(id)) {
          const postersContainer=document.querySelector("#posters-postersContainer");
          postersContainer.setAttribute("cursor-listener",{
            selectedItemId: id,
          });
          this.el.setAttribute("material",{ color:"#1565c0"});
        }

         });
    },