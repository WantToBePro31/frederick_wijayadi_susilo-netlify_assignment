module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        phone: { min: "320px", max: "1023px" },
      },
      colors: {
        navfc: "#fa8072",
        eec: "rgb(43, 177, 226)",
        contact: "#ffebcd",
        legendc: "#7fffd4",
        labelc: "rgb(50, 48, 45)",
        inputc: "rgb(32, 193, 234)",
        inputphc: "rgba(255, 255, 255, 0.4)",
        textareac: "rgb(8, 17, 184)",
        textareaphc: "rgb(66, 58, 58, 0.4)",
        buttonc: "#ffffff",
      },
      background: {
        input: "rgba(71, 45, 45, 0.15)",
        button: "#18d26e",
        buttonbef: "rgba(255, 255, 255, 0.5)",
      },
      backgroundColor: {
        container: "#322f3d",
        navc: "#348751",
        progc: "#52ad72",
        item1: "#ff6347",
        item2: "#adff2f",
        line: "#00ffff",
        textareac: "#ffc0cb",
        footerc: "rgb(237, 212, 180)",
      },
      borderWidth: {
        widthpoint1: "0.1vw",
        widthpoint2: "0.2vw",
        widthpoint3: "0.3vw",
      },
      borderColor: {
        blogo: "rgb(246, 176, 238)",
        progc: "#52ad72",
        line: "#00ffff",
        input: "#808080",
      },
      borderRadius: {
        width1: "1vw",
        percen8: "8%",
        percen50: "50%",
      },
      fontSize: {
        width1: "1vw",
        width1point5: "1.5vw",
        width2: "2vw",
        width3: "3vw",
        width5: "5vw",
        width7: "7vw",
        height3: "3vh",
        height5: "5vh",
      },
      width: {
        width1: "1vw",
        width2: "2vw",
        width7: "7vw",
        width8: "8vw",
        width9: "9vw",
        width10: "10vw",
        width30: "30vw",
        width40: "40vw",
        width50: "50vw",
        width60: "60vw",
        height25: "25vh",
        percen5: "5%",
        percen40: "40%",
        percen50: "50%",
        percen60: "60%",
        percen70: "70%",
        percen80: "80%",
        percen90: "90%",
      },
      maxWidth: {
        percen50: "50%",
      },
      height: {
        width1: "1vw",
        width20: "20vw",
        height5: "5hv",
        percen50: "50%",
        percen130: "130%",
      },
      padding: {
        widthpoint5: "0.5vw",
      },
      margin: {
        minwidth1: "-1vw",
        widthzero1point5: "0 1.5vw",
        widthpoint5: "0.5vw",
        width1: "1vw",
        width1zero: "1vw 0",
        width1point5: "1.5vw",
        width2: "2vw",
        width3: "3vw",
        width4: "4vw",
        width4auto: "4vw auto",
        width4point5: "4.5vw",
        width40: "40vw",
        minheight10: "-10vh",
        height5: "5vh",
      },
      inset: {
        widthpoint4: "0.4vw",
        widthpoint5: "0.5vw",
      },
      gap: {
        widthzeropoint5: "0.5vw",
        width1: "1vw",
        width1point5: "1.5vw",
        width2: "2vw",
        width5: "5vw",
        width8: "8vw",
      },
      letterSpacing: {
        rem1: "1rem",
      },
      backgroundSize: {
        skillbgz: "200% auto",
        contactbgz: "100% 0.3vw, 0 0.3vw",
        contactbgzh: "0 0.3vw, 100% 0.3vw",
      },
      backgroundPosition: {
        contactbgp: "100% 100%, 0 100%",
      },
      fontFamily: {
        navf: ["'M PLUS Rounded 1c'", "sans-serif"],
        homef: ["'Bungee Spice'", "cursive"],
        aboutf: ["'Luckiest Guy'", "cursive"],
        aboutfex: ["'Dangrek'", "cursive"],
        eef: ["'Permanent Marker'", "cursive"],
        descpan: [
          "'Gill Sans'",
          "'Gill Sans MT'",
          "Calibri",
          "'Trebuchet MS'",
          "sans-serif",
        ],
        descul: ["'Oswald'", "sans-serif"],
        labelf: [
          "Impact",
          "Haettenschweiler",
          "'Arial Narrow Bold'",
          "sans-serif",
        ],
        buttonf: ["'Ubuntu'", "sans-serif"],
        cpf: ["'Kanit'", "sans-serif"],
      },
      textShadow: {
        navs: "0 0 20px #b0e0e6, 0 0 40px #b0e0e6, 0 0 60px #b0e0e6, 0 0 80px #b0e0e6, 0 0 1000px #b0e0e6",
      },
      boxShadow: {
        progbar:
          "3px 3px 5px -1px rgba(255, 255, 255, 0.5), -3px -3px 5px -1px rgba(255, 255, 255, 0.5);",
      },
      transformOrigin: {
        "top-left-70": "70% 70%",
      },
      keyframes: {
        line: {
          from: {
            "border-width": "2px",
            "border-style": "dashed none dashed none",
            "border-color": "rgb(221, 228, 111) #fff rgb(222, 117, 180) #fff",
          },
          to: {
            "border-width": "2px",
            "border-style": "dashed none dashed none",
            "border-color": "rgb(222, 117, 180) #fff rgb(221, 228, 111) #fff",
          },
        },
        wave: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "10%": {
            transform: "rotate(10deg)",
          },
          "20%": {
            transform: "rotate(-5deg)",
          },
          "30%": {
            transform: "rotate(10deg)",
          },
          "40%": {
            transform: "rotate(-5deg)",
          },
          "50%": {
            transform: "rotate(10deg)",
          },
          "60%": {
            transform: "rotate(-5deg)",
          },
          "70%": {
            transform: "rotate(10deg)",
          },
          "80%": {
            transform: "rotate(-5deg)",
          },
          "90%": {
            transform: "rotate(10deg)",
          },
          "100%": {
            transform: "rotate(0deg)",
          },
        },
        indeflate: {
          "0%": {
            "font-size": "3vw",
          },
          "25%": {
            "font-size": "3.5vw",
          },
          "50%": {
            "font-size": "4vw",
          },
          "75%": {
            "font-size": "3.5vw",
          },
          "100%": {
            "font-size": "3vw",
          },
        },
        textclip: {
          from: {
            "background-position": 0,
          },
          to: {
            "background-position": "100%",
          },
        },
        progressBar90: {
          "0%": {
            width: "0%",
            "background-color": "rgb(239, 132, 132)",
          },
          "50%": {
            "background-color": "rgb(106, 205, 224)",
          },
          "100%": {
            width: "90%",
            "background-color": "#52ad72",
          },
        },
        progressBar80: {
          "0%": {
            width: "0%",
            "background-color": "rgb(239, 132, 132)",
          },
          "50%": {
            "background-color": "rgb(106, 205, 224)",
          },
          "100%": {
            width: "80%",
            "background-color": "#52ad72",
          },
        },
        progressBar70: {
          "0%": {
            width: "0%",
            "background-color": "rgb(239, 132, 132)",
          },
          "50%": {
            "background-color": "rgb(106, 205, 224)",
          },
          "100%": {
            width: "70%",
            "background-color": "#52ad72",
          },
        },
        progressBar60: {
          "0%": {
            width: "0%",
            "background-color": "rgb(239, 132, 132)",
          },
          "50%": {
            "background-color": "rgb(106, 205, 224)",
          },
          "100%": {
            width: "60%",
            "background-color": "#52ad72",
          },
        },
        progressBar50: {
          "0%": {
            width: "0%",
            "background-color": "rgb(239, 132, 132)",
          },
          "50%": {
            "background-color": "rgb(106, 205, 224)",
          },
          "100%": {
            width: "50%",
            "background-color": "#52ad72",
          },
        },
        progressBar40: {
          "0%": {
            width: "0%",
            "background-color": "rgb(239, 132, 132)",
          },
          "50%": {
            "background-color": "rgb(106, 205, 224)",
          },
          "100%": {
            width: "40%",
            "background-color": "#52ad72",
          },
        },
        glow: {
          "0%": {
            "text-shadow": "0 0 0px #fff, 0 0 0px #fff, 0 0 0px #fff",
          },
          "10%": {
            "text-shadow": "0 0 2px #fff, 0 0 4px #fff, 0 0 8px #fff",
          },
          "20%": {
            "text-shadow": "0 0 4px #fff, 0 0 8px #fff, 0 0 16px #fff",
          },
          "30%": {
            "text-shadow": "0 0 6px #fff, 0 0 12px #fff, 0 0 24px #fff",
          },
          "40%": {
            "text-shadow": "0 0 8px #fff, 0 0 16px #fff, 0 0 32px #fff",
          },
          "50%": {
            "text-shadow": "0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff",
          },
          "60%": {
            "text-shadow": "0 0 8px #fff, 0 0 16px #fff, 0 0 32px #fff",
          },
          "70%": {
            "text-shadow": "0 0 6px #fff, 0 0 12px #fff, 0 0 24px #fff",
          },
          "80%": {
            "text-shadow": "0 0 4px #fff, 0 0 8px #fff, 0 0 16px #fff",
          },
          "90%": {
            "text-shadow": "0 0 2px #fff, 0 0 4px #fff, 0 0 8px #fff",
          },
          "100%": {
            "text-shadow": "0 0 0px #fff, 0 0 0px #fff, 0 0 0px #fff",
          },
        },
      },
      animation: {
        line: "line 0.5s ease-in-out infinite alternate",
        wave: "wave 2.5s infinite",
        indeflate: "indeflate 0.6s ease-in-out infinite",
        textclip: "textclip 1.5s linear infinite",
        progressBar90: "progressBar90 1.5s",
        progressBar80: "progressBar80 1.5s",
        progressBar70: "progressBar70 1.5s",
        progressBar60: "progressBar60 1.5s",
        progressBar50: "progressBar50 1.5s",
        progressBar40: "progressBar40 1.5s",
        glow: "glow 1s infinite",
      },
      gridTemplateRows: {
        auto3: "repeat(3, auto)",
        main: "90vw 60vw 120vw 100vw 120vw",
        smain: "50vw 50vw 90vw 90vw 90vw",
        lmain: "50vw 40vw 80vw 90vw 90vw",
      },
      gridTemplateColumns: {
        auto3: "repeat(3, auto)",
      },
      backgroundImage: {
        home: 'url("https://free4kwallpapers.com/uploads/originals/2019/12/11/some-bis-biswas-scenery-wallpaper.jpg")',
        about:
          'url("https://c4.wallpaperflare.com/wallpaper/535/845/69/digital-art-artwork-fantasy-art-planet-sun-hd-wallpaper-preview.jpg")',
        aboutbgc:
          "linear-gradient(90deg, rgba(203,61,154,1) 0%, rgba(62,197,210,1) 44%, rgba(161,254,137,1) 100%)",
        skill:
          'url("https://img2.wallspic.com/previews/3/8/3/5/5/155383/155383-minimalist-minimalism-design-atmosphere-light-x750.jpg")',
        skillbgc:
          "linear-gradient(-225deg, #d8d5e2 0%, #a96ee7 29%, #e0439cde 67%, rgb(239, 239, 87) 81%, #f14242 100%);",
        ee: 'url("https://s0.smartresize.com/wallpaper/456/402/HD-wallpaper-beautiful-evening-landscape-minimal-8k-landscape-morning-artist-artwork-digital-art-minimalism-minimalist.jpg")',
        contact:
          'url("https://i.pinimg.com/originals/2a/bf/99/2abf995a71308926ca9ba270ad928c6d.jpg")',
        contactbgc:
          "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), linear-gradient(90deg, rgba(203,61,154,1) 0%, rgba(62,197,210,1) 44%, rgba(161,254,137,1) 100%)",
        form: 'url("https://cdn.wallpapersafari.com/40/67/g32cZY.jpg")',
      },
      zIndex: {
        z1: 1,
      },
      transitionProperty: {
        contactp: "background-size",
        sosmedp: "transform",
      },
      transform: {
        buttont: "skewX(45deg) translateX(45vw)",
        revbuttont: "skewX(45deg) translateX(-45vw)",
        sosmedt: "translateY(-1vw)",
      },
    },
  },
};
