import Courses from '../../models/courses/courses.js'
import unrealEngine from '../../models/courses/unrealEngine.js'
import figma from '../../models/courses/figma.js'
import photoshop from '../../models/courses/photoshop.js'
import illustrator from '../../models/courses/illustrator.js'
import premierPro from '../../models/courses/premierPro.js'
import corelDraw from '../../models/courses/corelDraw.js'
import afterEffects from '../../models/courses/afterEffects.js'
export const addingCourse = async (req, res, next) => {
    try {
        let {
            name,
            language,
            youtubePlaylistURL,
            youtubeVideoURL,
            url,
            year,
            manba,
            mavzu,
        } = req.body
        language = language.toUpperCase()
        const courseOrKnowledge = {
            name,
            language,
            youtubePlaylistURL,
            youtubeVideoURL,
            url,
            year,
            manba,
            mavzu,
        }

        const addedCourse = await Courses.create(courseOrKnowledge)
        if (addedCourse) {
            res.send(addedCourse)
        } else {
            res.send("qo'shilmadi")
        }
    } catch (error) {
        console.log(error)
    }
}
export const addingUnreal = async (req, res, next) => {
    try {
        let {
            name,
            language,
            youtubePlaylistURL,
            youtubeVideoURL,
            url,
            year,
            manba,
            mavzu,
        } = req.body
        language = language.toUpperCase()
        const courseOrKnowledge = {
            name,
            language,
            youtubePlaylistURL,
            youtubeVideoURL,
            url,
            year,
            manba,
            mavzu,
        }

        const addedCourse = await unrealEngine.create(courseOrKnowledge)
        if (addedCourse) {
            res.send(addedCourse)
        } else {
            res.send("qo'shilmadi")
        }
    } catch (error) {
        console.log(error)
    }
}

export const addingFigma = async (req, res, next) => {
    try {
        let {
            name,
            language,
            youtubePlaylistURL,
            youtubeVideoURL,
            url,
            year,
            manba,
            mavzu,
        } = req.body
        language = language.toUpperCase()
        const courseOrKnowledge = {
            name,
            language,
            youtubePlaylistURL,
            youtubeVideoURL,
            url,
            year,
            manba,
            mavzu,
        }

        const addedCourse = await figma.create(courseOrKnowledge)
        if (addedCourse) {
            res.send(addedCourse)
        } else {
            res.send("qo'shilmadi")
        }
    } catch (error) {
        console.log(error)
    }
}
export const addingPhotoshop = async (req, res, next) => {
    try {
        let {
            name,
            language,
            youtubePlaylistURL,
            youtubeVideoURL,
            url,
            year,
            manba,
            mavzu,
        } = req.body
        language = language.toUpperCase()
        const courseOrKnowledge = {
            name,
            language,
            youtubePlaylistURL,
            youtubeVideoURL,
            url,
            year,
            manba,
            mavzu,
        }

        const addedCourse = await photoshop.create(courseOrKnowledge)
        if (addedCourse) {
            res.send(addedCourse)
        } else {
            res.send("qo'shilmadi")
        }
    } catch (error) {
        console.log(error)
    }
}

export const addingillustrator = async (req, res, next) => {
    try {
        let {
            name,
            language,
            youtubePlaylistURL,
            youtubeVideoURL,
            url,
            year,
            manba,
            mavzu,
        } = req.body
        language = language.toUpperCase()
        const courseOrKnowledge = {
            name,
            language,
            youtubePlaylistURL,
            youtubeVideoURL,
            url,
            year,
            manba,
            mavzu,
        }

        const addedCourse = await illustrator.create(courseOrKnowledge)
        if (addedCourse) {
            res.send(addedCourse)
        } else {
            res.send("qo'shilmadi")
        }
    } catch (error) {
        console.log(error)
    }
}

export const addingPremier = async (req, res, next) => {
    try {
        let {
            name,
            language,
            youtubePlaylistURL,
            youtubeVideoURL,
            url,
            year,
            manba,
            mavzu,
        } = req.body
        language = language.toUpperCase()
        const courseOrKnowledge = {
            name,
            language,
            youtubePlaylistURL,
            youtubeVideoURL,
            url,
            year,
            manba,
            mavzu,
        }

        const addedCourse = await premierPro.create(courseOrKnowledge)
        if (addedCourse) {
            res.send(addedCourse)
        } else {
            res.send("qo'shilmadi")
        }
    } catch (error) {
        console.log(error)
    }
}
export const addingCorelDraw = async (req, res, next) => {
    try {
        let {
            name,
            language,
            youtubePlaylistURL,
            youtubeVideoURL,
            url,
            year,
            manba,
            mavzu,
        } = req.body
        language = language.toUpperCase()
        const courseOrKnowledge = {
            name,
            language,
            youtubePlaylistURL,
            youtubeVideoURL,
            url,
            year,
            manba,
            mavzu,
        }

        const addedCourse = await corelDraw.create(courseOrKnowledge)
        if (addedCourse) {
            res.send(addedCourse)
        } else {
            res.send("qo'shilmadi")
        }
    } catch (error) {
        console.log(error)
    }
}
export const addingAfterEffects = async (req, res, next) => {
    try {
        let {
            name,
            language,
            youtubePlaylistURL,
            youtubeVideoURL,
            url,
            year,
            manba,
            mavzu,
        } = req.body
        language = language.toUpperCase()
        const courseOrKnowledge = {
            name,
            language,
            youtubePlaylistURL,
            youtubeVideoURL,
            url,
            year,
            manba,
            mavzu,
        }

        const addedCourse = await afterEffects.create(courseOrKnowledge)
        if (addedCourse) {
            res.send(addedCourse)
        } else {
            res.send("qo'shilmadi")
        }
    } catch (error) {
        console.log(error)
    }
}
/////////////////////////////////////////////////////////////////
export const deletingCourses = async (req, res) => {
    try {
        const isDeleted = await Courses.deleteMany()
        if (isDeleted) {
            res.send('our shark ate all courses')
        } else {
            res.send('our shark is tired')
        }
    } catch (error) {
        console.log(error)
    }
}
