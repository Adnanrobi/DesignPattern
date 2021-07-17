
interface Observer {
    update(
        courseNo: string,
        topicName: string,
        teacherName: string,
        time: string): void
}

class StudentDisplay implements Observer {
    courseNo!: string
    topicName!: string
    teacherName!: string
    time!: string
    update(
        courseNo: string,
        topicName: string,
        teacherName: string,
        time: string): void {

        let date=new Date(time).toLocaleString('en-us',{hour12:true})

        this.courseNo = courseNo
        this.topicName = topicName
        this.teacherName = teacherName
        this.time = date
        this.display()

    }
    display(): void {
        console.log("Student display:")
        console.log("Course No: " + this.courseNo);
        console.log("Topic Name: " + this.topicName);
        console.log("Teacher: " + this.teacherName);
        console.log("Time: " + this.time);
    }
}

class TeacherDisplay implements Observer {
    courseNo!: string
    topicName!: string
    teacherName!: string
    time!: string

    update(
        courseNo: string,
        topicName: string,
        teacherName: string,
        time: string): void {

        let date = new Date(time).toLocaleString('en-us',
            {
                hour12: false
            })

        this.courseNo = courseNo
        this.topicName = topicName
        this.teacherName = teacherName
        this.time = date
        this.display()
    }
    display(): void {
        console.log("Teacher display:")
        console.log("Course No: " + this.courseNo);
        console.log("Topic Name: " + this.topicName);
        console.log("Teacher: " + this.teacherName);
        console.log("Time: " + this.time);
    }
}

interface Subject {
    registerObserver(o: Observer): void;
    removeObserver(o: Observer): void;
    notifyObserver(): void;
}

class classData implements Subject {
    courseNo!: string
    topicName!: string
    teacherName!: string
    time!: string

    private observers: Array<Observer> = []

    registerObserver(o: Observer): void {
        this.observers.push(o)
    }
    removeObserver(o: Observer): void {
        this.observers = this.observers.filter(obj => obj !== o)
    }
    notifyObserver(): void {
        this.observers.map(o => {
            o.update(this.courseNo, this.topicName, this.teacherName, this.time)
        })
    }

    measuredChanged(
        courseNo: string,
        time: string,
        topicName: string,
        teacherName: string): void
    {
        this.courseNo = courseNo
        this.time = time
        this.topicName = topicName
        this.teacherName = teacherName
        this.notifyObserver()
    }
}

let classdata = new classData();
let s1 = new StudentDisplay();
let s2 = new StudentDisplay();
let t1 = new TeacherDisplay();
let t2 = new TeacherDisplay();

classdata.registerObserver(s1);
classdata.measuredChanged("SWE-4501", "10.07.2021, 23:54", "Observer Pattern", "ABC");

classdata.registerObserver(s2);
classdata.measuredChanged("SWE-4501", "10.07.2021, 23:55", "Observer Pattern", "ABC");

classdata.removeObserver(s2);
classdata.measuredChanged("SWE-4501", "10.07.2021, 23:56", "Observer Pattern", "ABC");

classdata.registerObserver(t1);
classdata.measuredChanged("SWE-4501", "10.07.2021, 23:57", "Observer Pattern", "ABC");
