import { use } from "react";
import Layout from "@/common/Layout";
import Courses from "@/components/Courses";

async function getCourses() {
  const courses = await fetch("http://localhost:4000/courses");
  return courses.json();
}

export default function CallToActionWithIllustration() {
  const courses = use(getCourses());
  return (
    <Layout>
      <Courses courses={courses} />
    </Layout>
  );
}
