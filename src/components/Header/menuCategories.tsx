import Link from "next/link";

export const MenuCategories = () => {
  const listMenu = [
    {
      value: "dan-karaoke",
      label: "Dàn Karaoke",
    },
    {
      value: "loa-weeworld",
      label: "Loa Weeworld",
    },
    {
      value: "loa-sub",
      label: "Loa sub",
    },
    {
      value: "cuc-day-cong-suat",
      label: "Cục đẩy công suất",
    },
    {
      value: "vang-co-vang-so",
      label: "Vang cơ - Vang số",
    },
    {
      value: "micro",
      label: "Micro",
    },
    {
      value: "nang-tieng",
      label: "Nâng tiếng",
    },
    {
      value: "loa-treble-roi",
      label: "Loa treble rời",
    },
  ];
  return (
    <div className="py-4">
      <div className="flex items-center gap-4">
        {listMenu.map((item) => (
          <div key={item.value}>
            <Link href={item.value}>{item.label}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};
