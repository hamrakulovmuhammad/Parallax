
	let stars = document.querySelector('#stars');
    let moon = document.querySelector('#moon');
    let mountains_behind = document.querySelector('#mountains_behind');
    let text = document.querySelector('#text');
    let btn = document.querySelector('#btn');
    let sec = document.querySelector('#sec h2');
    let p = document.querySelector('#texts');
    let cursor = document.createElement('span')


    let texts = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
      distinctio nisi laboriosam facilis optio enim, accusantium
      aliquam reiciendis! Ducimus natus esse minus eveniet dolorum
      maiores veritatis non accusamus inventore repellat. Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Laudantium,
      explicabo est id temporibus omnis eveniet dolorem dicta, earum
      delectus accusantium aliquid ipsum illum fugiat eum facere
      quidem quo fuga sunt! Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Exercitationem tempore ea dicta vel placeat
      dolores quae, facere perspiciatis repudiandae nobis dolorem?
      Aliquid, repudiandae dicta! Commodi sequi perferendis maxime
      quis sint. 
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
      distinctio nisi laboriosam facilis optio enim, accusantium
      aliquam reiciendis! Ducimus natus esse minus eveniet dolorum
      maiores veritatis non accusamus inventore repellat. Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Laudantium,
      explicabo est id temporibus omnis eveniet dolorem dicta, earum
      delectus accusantium aliquid ipsum illum fugiat eum facere
      quidem quo fuga sunt! Lorem ipsum dolor sit amet consectetur
      adipisicing elit.
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
      distinctio nisi laboriosam facilis optio enim, accusantium
      aliquam reiciendis! Ducimus natus esse minus eveniet dolorum
      maiores veritatis non accusamus inventore repellat. Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Laudantium,
      explicabo est id temporibus omnis eveniet dolorem dicta, earum
      delectus accusantium aliquid ipsum illum fugiat eum facere
      quidem quo fuga sunt! Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Exercitationem tempore ea dicta vel placeat
      dolores quae, facere perspiciatis repudiandae nobis dolorem?
      Aliquid, repudiandae dicta! Commodi sequi perferendis maxime
      quis sint. 
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
      distinctio nisi laboriosam facilis optio enim, accusantium
      aliquam reiciendis! Ducimus natus esse minus eveniet dolorum
      maiores veritatis non accusamus inventore repellat. Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Laudantium,
      explicabo est id temporibus omnis eveniet dolorem dicta, earum
      delectus accusantium aliquid ipsum illum fugiat eum facere
      quidem quo fuga sunt! Lorem ipsum dolor sit amet consectetur
      adipisicing elit.`
    cursor.textContent = '|'
    let text1 = ''
    let input = (i) => {
      setTimeout(()=>{
            console.log(texts[i]);
            
        text1 += texts[i]
        p.textContent = text1
        p.append(cursor)
      }, 30*i)
    }

    for (let i = 0; i < texts.length ; i++) {
      input(i)
    }

    window.onscroll = () => {
      let y = window.scrollY
      stars.style.margin = (y * 0.45) + "px"
      moon.style.marginTop = (y * 0.65) + "px"
      mountains_behind.style.marginTop = (y * 0.55) + "px"
      text.style.marginRight = (y * 3) + "px"
      btn.style.marginTop = (y * 0.55) + "px"
    }

