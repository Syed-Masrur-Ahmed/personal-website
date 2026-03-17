export type SphericalPoint = { x: number; y: number; z: number };

/**
 * Returns `count` points evenly distributed on the surface of a sphere
 * of the given `radius` using the Fibonacci spiral (golden angle) method.
 * This gives a visually uniform spread for any count.
 */
export function calculateSphericalPositions(
  count: number,
  radius: number
): SphericalPoint[] {
  if (count === 0) return [];
  if (count === 1) return [{ x: 0, y: radius, z: 0 }];

  const goldenAngle = Math.PI * (3 - Math.sqrt(5)); // ~2.399 radians
  const points: SphericalPoint[] = [];

  for (let i = 0; i < count; i++) {
    // y goes from +1 to -1
    const y = 1 - (i / (count - 1)) * 2;
    const radiusAtY = Math.sqrt(1 - y * y);
    const theta = goldenAngle * i;

    points.push({
      x: Math.cos(theta) * radiusAtY * radius,
      y: y * radius,
      z: Math.sin(theta) * radiusAtY * radius,
    });
  }

  return points;
}
