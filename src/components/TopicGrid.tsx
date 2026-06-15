"use client";

import type { GroupedTopic } from "@/lib/grouping";
import { TopicCard } from "./TopicCard";

type TopicGridProps = {
  topics: GroupedTopic[];
  selectedTopicId: string | null;
  onSelectTopic: (topicId: string) => void;
};

export function TopicGrid({ topics, selectedTopicId, onSelectTopic }: TopicGridProps) {
  const visibleTopics = topics.filter((t) => t.formulaCount > 0);

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {visibleTopics.map((topic, index) => (
        <TopicCard
          key={topic.id}
          topic={topic}
          selected={selectedTopicId === topic.id}
          onClick={() => onSelectTopic(topic.id)}
          index={index}
        />
      ))}
    </div>
  );
}
