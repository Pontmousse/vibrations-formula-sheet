import type { FormulaEntry } from "@/data/formulas";
import {
  selectionNodes,
  type SelectionNode,
  type SelectionOption,
  type SelectionResult,
  SELECTION_ROOT_NODE_ID,
} from "@/data/formulaSelectionTree";

export type { SelectionNode, SelectionOption, SelectionResult };

export function getSelectionNode(nodeId: string): SelectionNode | undefined {
  return selectionNodes[nodeId];
}

export function getRootNode(): SelectionNode {
  return selectionNodes[SELECTION_ROOT_NODE_ID];
}

export function resolveFormulas(
  result: SelectionResult,
  allFormulas: FormulaEntry[],
): FormulaEntry[] {
  const byId = new Map(allFormulas.map((f) => [f.id, f]));
  return result.formulaIds
    .map((id) => byId.get(id))
    .filter((f): f is FormulaEntry => Boolean(f));
}

export function getOptionResult(option: SelectionOption): SelectionResult | null {
  return option.result ?? null;
}

export function getOptionNextNodeId(option: SelectionOption): string | null {
  return option.nextNodeId ?? null;
}
