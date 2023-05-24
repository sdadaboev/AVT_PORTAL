import Courses from '../../models/courses/courses.js'
export const courses3DSMAX = async (req, res, next) => {
    try {
        const allCourses = await Courses.find()
        console.log(allCourses)
        res.render('my page/courses.ejs', {
            title: 'kurslar',
            allCourses,
        })
    } catch (error) {
        console.log(error)
    }
}
