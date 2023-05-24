import afterEffects from '../../models/courses/afterEffects.js'
export const courseAfterEffects = async (req, res, next) => {
    try {
        const allCourses = await afterEffects.find()
        console.log(allCourses)
        res.render('my page/afterEffectsCourses.ejs', {
            title: 'kurslar',
            allCourses,
        })
    } catch (error) {
        console.log(error)
    }
}
