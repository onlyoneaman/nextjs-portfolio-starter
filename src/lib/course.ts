import {CourseFamiliarity} from "@/types/course.ts";

const getFamiliarityMessage = (familiarity: string) => {
  switch (familiarity) {
    case CourseFamiliarity.New:
      return "New to this subject";
    case CourseFamiliarity.Beginner:
      return "Just getting started, know some basics";
    case CourseFamiliarity.Intermediate:
      return "Comfortable with the basics, looking to improve";
    case CourseFamiliarity.Advanced:
      return "Have a good understanding, looking for deeper insights";
    case CourseFamiliarity.Expert:
      return "Highly knowledgeable, looking for advanced content";
    default:
      return "";
  }
}

export {
  getFamiliarityMessage
}
