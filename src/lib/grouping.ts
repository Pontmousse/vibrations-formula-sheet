import type { FormulaEntry } from "@/data/formulas";
import type { CourseTopic } from "@/data/courseTopics";

export type GroupedTopic = CourseTopic & {
  subtopicGroups: {
    subtopic: string;
    formulas: FormulaEntry[];
  }[];
  formulaCount: number;
};

export function groupFormulasByTopic(
  topics: CourseTopic[],
  formulas: FormulaEntry[],
): GroupedTopic[] {
  return topics.map((topic) => {
    const topicFormulas = formulas.filter((f) => f.topic === topic.id);
    const subtopicGroups = topic.subtopics
      .map((subtopic) => ({
        subtopic,
        formulas: topicFormulas.filter((f) => f.subtopic === subtopic),
      }))
      .filter((group) => group.formulas.length > 0);

    return {
      ...topic,
      subtopicGroups,
      formulaCount: topicFormulas.length,
    };
  });
}
