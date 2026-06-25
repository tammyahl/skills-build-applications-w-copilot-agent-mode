# OctoFit Tracker API Configuration

## Environment Detection

The Node.js API automatically detects the environment and configures the base URL accordingly:

### GitHub Codespaces
When running in Codespaces, the `CODESPACE_NAME` environment variable is set:
```
API Base URL: https://$CODESPACE_NAME-8000.app.github.dev
Example: https://congenial-winner-gpqq6jr5xqgfvrj6-8000.app.github.dev
```

### Local Development
When running locally, the `CODESPACE_NAME` is not available:
```
API Base URL: http://localhost:8000
```

## Server Configuration

- **Port:** 8000
- **Database:** MongoDB on `mongodb://localhost:27017/octofit_db`
- **Framework:** Express.js with TypeScript
- **Connection:** Automatic based on environment

## API Endpoints

### Health & Info
- `GET /` - API root with version info
- `GET /health` - Health check status

### Resource APIs
- `GET /api/users` - List all users
- `GET /api/teams` - List all teams
- `GET /api/activities` - List all activities
- `GET /api/leaderboard` - View global leaderboard
- `GET /api/workouts` - List all workouts

## Configuration Code

Location: `octofit-tracker/backend/src/server.ts`

```typescript
// Determine API URL for Codespaces support
const getApiUrl = (): string => {
  if (process.env.CODESPACE_NAME) {
    return `https://${process.env.CODESPACE_NAME}-8000.app.github.dev`;
  }
  return `http://localhost:${PORT}`;
};

const API_URL = getApiUrl();
```

## Testing the API

### Using cURL (Localhost)
```bash
# Get users
curl http://localhost:8000/api/users

# Get activities
curl http://localhost:8000/api/activities

# Health check
curl http://localhost:8000/health
```

### Using cURL (Codespaces)
```bash
# Get users
curl https://congenial-winner-gpqq6jr5xqgfvrj6-8000.app.github.dev/api/users

# Get activities
curl https://congenial-winner-gpqq6jr5xqgfvrj6-8000.app.github.dev/api/activities

# Health check
curl https://congenial-winner-gpqq6jr5xqgfvrj6-8000.app.github.dev/health
```

## Starting the Server

```bash
cd octofit-tracker/backend

# Development mode (with hot reload)
npm run dev

# Production build
npm run build
npm run start
```

## API Response Examples

### GET /api/users
```json
{
  "message": "GET /api/users - List all users",
  "status": "success"
}
```

### GET /api/activities
```json
{
  "message": "GET /api/activities - List all activities",
  "status": "success"
}
```

### GET /health
```json
{
  "status": "OK",
  "timestamp": "2026-06-25T20:17:14.068Z",
  "apiUrl": "https://congenial-winner-gpqq6jr5xqgfvrj6-8000.app.github.dev"
}
```

### GET /
```json
{
  "message": "OctoFit Tracker API",
  "apiUrl": "https://congenial-winner-gpqq6jr5xqgfvrj6-8000.app.github.dev",
  "version": "1.0.0"
}
```

## Verification Status

✅ Backend running on port 8000
✅ Codespaces detection working (CODESPACE_NAME environment variable)
✅ API URL automatically configured for Codespaces
✅ Localhost support verified
✅ /api/users endpoint responding correctly
✅ /api/activities endpoint responding correctly
✅ Health check endpoint working
✅ MongoDB connection established
✅ All routes logging on startup
