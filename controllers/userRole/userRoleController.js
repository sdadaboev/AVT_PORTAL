import Role from '../../models/User/role.js'
import path from 'path'

export const addingRole = async (req, res, next) => {
    try {
        const value = req.body.value
        const findRole = await Role.findOne({ value: value })
        if (findRole) {
            return res.json({
                message: "bunday role mavjud, boshqasini o'ylang",
            })
        }   
        const role = new Role({
            value,
        })
        console.log('role-****-', role)

        const userRole = await role.save()

        console.log('*****', userRole)
        console.log("yengi ro'l muvaffaqiyatli qo'shildi", userRole)
        if (userRole) {
            res.json({
                message: "yengi ro'l muvaffaqiyatli qo'shildi",
                path: path.dirname,
            })
        }
    } catch (error) {
        console.log(error)
        // handleErrors(error)
    }
}
