export type Board =
  | "course"
  | "dorm"
  | "register"
  | "transport"
  | "admin"
  | "club";

export interface FaqItem {
  id: string;
  board: Board;
  q: string;
  a: string;
  keywords: string[];
}

export const BOARD_NAMES: Record<Board, string> = {
  course: "📚 選課與學分",
  dorm: "🏠 宿舍生活",
  register: "💰 註冊與學雜費",
  transport: "🛵 交通與周邊",
  admin: "🎓 獎助與行政",
  club: "🎉 社團與活動",
};

export interface DeptLink {
  name: string;
  url: string;
}

export type FoodCategory = "food" | "drink";

export type FoodPeriod = "breakfast" | "lunch-dinner" | "afternoon" | "late-night";

export interface FoodItem {
  name: string;
  cat: FoodCategory;
  period: FoodPeriod;
  badge?: string;
  desc: string;
}
