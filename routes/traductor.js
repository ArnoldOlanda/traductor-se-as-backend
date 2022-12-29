const { Router } = require("express");
const { query } = require("../database/config");

const router = Router()


router.get('/', async (req, res) => {
    const { rows } = await query('select * from public.traducciones order by id');
    res.json(rows)
})

router.get('/:id', async (req, res) => {

    const {id} = req.params;
    
    const {rows} = await query(`select * from public.traducciones where id=${ Number(id) }`)

    res.json(rows)
})

module.exports = router