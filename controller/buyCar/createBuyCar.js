const BuyCar = require('../../schema/buyCar')

exports.createBuyCar = async (req, res) => {
  try {
    const {
      buyCar_id,
      title,
      price,
      year,
      kmsDriven,
      carModel,
      gas,
      gearType,
      description,
      register,
      condition,
      content,
      images,
      company,
    } = req.body
    if (!images) return res.status(400).json({ msg: 'No image upload' })

    const buyCar = await BuyCar.findOne({ buyCar_id })
    if (buyCar)
      return res.status(400).json({ msg: 'This vehicle already exists.' })

    const newBuyCar = new BuyCar({
        buyCar_id,
        title: title.toLowerCase(),
        price,
        year,
        kmsDriven,
        carModel,
        gas,
        gearType,
        description,
        register,
        condition,
        content,
        images,
        company,
    })

    await newBuyCar.save()
    res.json({ msg: 'Created a vehicle.' })
  } catch (err) {
    return res.status(500).json({ msg: err.message })
  }
}
