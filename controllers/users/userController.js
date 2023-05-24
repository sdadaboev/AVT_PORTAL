import User from '../../models/User/user.js'
const addingUser = async (req, res) => {
    try {
        console.log('addingdaman ')
        console.log('adding dagi body', req.body)
        const { username, password } = req.body
        const importantUserProfileData = {
            username,
            password,
        }
        const user = await User.create({
            username: username,
            importantUserProfile: importantUserProfileData,
        })
        res.render('forms/auth/registration', {
            title: 'registration',
        })
        console.log('user added----', user)
    } catch (error) {
        console.log(error)
    }
}
export default addingUser
