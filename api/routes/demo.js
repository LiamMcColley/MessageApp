
const express = require("express")
const router = express.Router()
const db = require("./firebase")
const { getDocs, collection, addDoc, Timestamp, deleteDoc, updateDoc, doc } = require("firebase/firestore")


router.get("/info", async (req, res, next) => {
    const allDocData = {}
    const docs = await getDocs(collection(db, "posts"))
    docs.forEach((doc) => allDocData[doc.id] = doc.data())
    res.json({ result: allDocData })
})

router.post("/post", (req, res, next) => {
    addDoc(collection(db, "posts"), {
        user: req.body.name,
        message: req.body.post,
        time: Timestamp.now()

    })
    res.send("Added to Database ")
})
router.delete("/delete", async (req, res, next) => {
    console.log(req.query.id)
    await deleteDoc(doc(db, "posts", req.query.id))
    res.send("deleted")
})
router.put("/update", async (req, res, next) => {
    await updateDoc(doc(db, "posts", req.query.id), {
        user: req.query.user,
        message: req.query.post,
        time: Timestamp.now()
    })
    res.send("updated")
})

module.exports = router