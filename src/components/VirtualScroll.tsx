'use client';

import { useMemo, useCallback, useState } from 'react';
import type { Board } from '@/lib/types';

interface VirtualScrollProps<T> {
  items: T[];
  itemHeight: number;
  containerHeight: number;
  renderItem: (item: T, index: number) => React.ReactNode;
  overscan?: number; // 多渲染的項目數，提高平滑度
}

/**
 * 虛擬滾動組件
 * 只渲染可見的項目，大幅減少 DOM 元素和提升性能
 * 
 * 使用方法:
 * <VirtualScroll
 *   items={items}
 *   itemHeight={120}
 *   containerHeight={600}
 *   renderItem={(item) => <div>{item.name}</div>}
 * />
 */
export function VirtualScroll<T>({
  items,
  itemHeight,
  containerHeight,
  renderItem,
  overscan = 3,
}: VirtualScrollProps<T>) {
  const [scrollTop, setScrollTop] = useState(0);

  // 計算可見範圍
  const visibleRange = useMemo(() => {
    const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
    const endIndex = Math.min(
      items.length,
      Math.ceil((scrollTop + containerHeight) / itemHeight) + overscan
    );
    return { startIndex, endIndex };
  }, [scrollTop, itemHeight, containerHeight, items.length, overscan]);

  // 只渲染可見的項目
  const visibleItems = useMemo(() => {
    return items.slice(visibleRange.startIndex, visibleRange.endIndex);
  }, [items, visibleRange]);

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    setScrollTop(target.scrollTop);
  }, []);

  const offsetY = visibleRange.startIndex * itemHeight;

  return (
    <div
      onScroll={handleScroll}
      style={{
        height: `${containerHeight}px`,
        overflow: 'auto',
        position: 'relative',
      }}
      className="virtual-scroll-container"
    >
      <div
        style={{
          height: `${items.length * itemHeight}px`,
          position: 'relative',
        }}
      >
        <div
          style={{
            transform: `translateY(${offsetY}px)`,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
          }}
        >
          {visibleItems.map((item, index) => (
            <div
              key={visibleRange.startIndex + index}
              style={{ height: `${itemHeight}px` }}
            >
              {renderItem(item, visibleRange.startIndex + index)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
