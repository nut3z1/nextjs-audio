"use client";

import { Profiler, ReactNode } from "react";

const ProfilerWrapper = ({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) => {
  const onRenderCallback = (
    id, // ID của Profiler tree
    phase, // "mount" hoặc "update"
    actualDuration, // Thời gian thực tế để render component
    baseDuration, // Thời gian ước tính nếu không có tối ưu hóa
    startTime, // Thời điểm bắt đầu render
    commitTime, // Thời điểm hoàn thành render
    interactions // Các tương tác liên quan đến render này
  ) => {
    console.log({
      id,
      phase,
      actualDuration,
      baseDuration,
      startTime,
      commitTime,
      interactions,
    });
  };

  return (
    <Profiler id={id} onRender={onRenderCallback}>
      {children}
    </Profiler>
  );
};

export default ProfilerWrapper;
