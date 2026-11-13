// Preserve the generated DNS filters and resolve CTFy tunnel endpoints to real IPs.
function main(config, profileName) {
  config.dns = config.dns || {};
  const filters = Array.isArray(config.dns['fake-ip-filter']) ? config.dns['fake-ip-filter'] : [];
  if (!filters.includes('+.ctfy.run')) filters.push('+.ctfy.run');
  config.dns['fake-ip-filter'] = filters;
  return config;
}