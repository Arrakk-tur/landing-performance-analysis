export function handleOutboundClick(productId: string, targetUrl: string) {
  // Analytics stub: register the outbound click signal gracefully
  // before the browser initiates navigation to the marketplace.
  try {
    if (typeof window !== 'undefined') {
      console.log('[v0] outbound_click', { productId, targetUrl });
      // A real implementation would forward this to an analytics endpoint,
      // e.g. navigator.sendBeacon('/api/track', JSON.stringify({ productId, targetUrl }))
    }
  } catch {
    // Never block navigation if tracking fails.
  }
}
