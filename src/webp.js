const imagemin = require('imagemin')
const imageminWebp = require('imagemin-webp')

;(async () => {
  let dir = 'Burgers'
  const files = await imagemin([`images/${dir}/*.{jpg,png}`], {
    destination: `images/${dir}/webp`,
    plugins: [imageminWebp({ quality: 60 })]
  })

  console.log(files)
  //=> [{data: <Buffer 89 50 4e …>, destinationPath: 'build/images/foo.jpg'}, …]
})()
