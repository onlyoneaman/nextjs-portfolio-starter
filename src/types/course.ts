export interface Course {
  id: string;
  title: string;
  description?: string;
  subject: string;
  familiarity: string;
  extra_instructions: string;
  contents: string[];
  created_at: number;
  user_id?: string;
}

enum CourseFamiliarity {
  New = "new",
  Beginner = "beginner",
  Intermediate = "intermediate",
  Advanced = "advanced",
  Expert = "expert",
}

const gradients = [
  'from-blue-600 to-purple-600',
  'from-emerald-500 to-blue-500',
  'from-rose-500 to-indigo-600',
  'from-amber-500 to-pink-500',
  'from-teal-400 to-blue-500',
  'from-fuchsia-500 to-cyan-500',
  'from-violet-600 to-indigo-600',
  'from-green-400 to-cyan-500',
];

export {
  CourseFamiliarity, gradients
}
