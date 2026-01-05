# UrbanPulse - Your Event & Logistics Planner

<p align="center"> <img src="https://img.shields.io/badge/Python-3.11-blue?logo=python&logoColor=white" /> <img src="https://img.shields.io/badge/Flask-API-black?logo=flask&logoColor=white" /> <img src="https://img.shields.io/badge/PostgreSQL-Database-blue?logo=postgresql&logoColor=white" /> <img src="https://img.shields.io/badge/Docker-Containerization-blue?logo=docker&logoColor=white" /> <img src="https://img.shields.io/badge/Docker%20Compose-Orchestration-blue?logo=docker&logoColor=white" /> <img src="https://img.shields.io/badge/REST-Architecture-green" /> <img src="https://img.shields.io/badge/SOA-4--Layer-orange" /> <img src="https://img.shields.io/badge/Telegram-Bot-blue?logo=telegram&logoColor=white" /> </p>

A service-oriented architecture (SOA) application that helps users discover events and plan logistics through a Telegram bot interface.

## 📋 Architecture Overview

UrbanPulse follows a strict 4-layer SOA pattern:

### Layer 1: Process-Centric Services (Orchestrators)
- **Event Discovery Orchestrator** (Port 5008) - Handles "What's happening tonight?" queries
- **Logistics & Commit Orchestrator** (Port 5009) - Handles "I want to go to [Event]" commitments

### Layer 2: Business Logic Services
- **Preference Matcher** (Port 5006) - Scores and ranks events based on user preferences
- **Transport Optimizer** (Port 5007) - Calculates optimal transport modes

### Layer 3: Adapter Services
- **Events Adapter** (Port 5003) - Wraps Ticketmaster API
- **Weather Adapter** (Port 5004) - Wraps OpenWeatherMap API
- **Map Adapter** (Port 5005) - Wraps OpenRouteService API

### Layer 4: Data Services
- **User Profile Service** (Port 5001) - Manages user profiles in PostgreSQL
- **Itinerary Service** (Port 5002) - Manages event commitments

### User Interface
- **Telegram Bot** - Chat interface for end users

## 🚀 Getting Started

### Prerequisites

1. **Python 3.11+**
2. **Docker & Docker Compose**
3. **PostgreSQL** (included in Docker setup)
4. **API Keys** (free tier available for all):
   - Ticketmaster API: https://developer.ticketmaster.com/
   - OpenWeatherMap API: https://openweathermap.org/api
   - OpenRouteService API: https://openrouteservice.org/dev/#/signup
   - Telegram Bot Token: https://core.telegram.org/bots#botfather


<p align="left">
  <img src="https://img.shields.io/badge/Ticketmaster-Events-purple" />
  <img src="https://img.shields.io/badge/OpenWeatherMap-Weather-orange" />
  <img src="https://img.shields.io/badge/OpenRouteService-Mapping-green" />
</p>

### Project Structure

```
urbanpulse/
├── services/
│   ├── data/
│   │   ├── user-profile/
│   │   │   ├── app.py
│   │   │   ├── Dockerfile
│   │   │   └── requirements.txt
│   │   └── itinerary/
│   │       ├── app.py
│   │       ├── Dockerfile
│   │       └── requirements.txt
│   ├── adapters/
│   │   ├── events/
│   │   │   ├── app.py
│   │   │   ├── Dockerfile
│   │   │   └── requirements.txt
│   │   ├── weather/
│   │   │   ├── app.py
│   │   │   ├── Dockerfile
│   │   │   └── requirements.txt
│   │   └── map/
│   │       ├── app.py
│   │       ├── Dockerfile
│   │       └── requirements.txt
│   ├── business/
│   │   ├── preference-matcher/
│   │   │   ├── app.py
│   │   │   ├── Dockerfile
│   │   │   └── requirements.txt
│   │   └── transport-optimizer/
│   │       ├── app.py
│   │       ├── Dockerfile
│   │       └── requirements.txt
│   └── orchestrators/
│       ├── event-discovery/
│       │   ├── app.py
│       │   ├── Dockerfile
│       │   └── requirements.txt
│       └── logistics-commit/
│           ├── app.py
│           ├── Dockerfile
│           └── requirements.txt
├── bot/
│   ├── app.py
│   ├── Dockerfile
│   └── requirements.txt
├── docker-compose.yml
├── .env
└── README.md
```

### Installation Steps

1. **Clone the repository**
```bash
git clone https://github.com/lewisndambiri/lewisndambiri.github.io/new/main/projects  
cd urbanpulse
```

2. **Set up environment variables**
```bash
cp .env.example .env
# Edit .env with your API keys
nano .env
```

3. **Create directory structure**
```bash
mkdir -p services/data/{user-profile,itinerary}
mkdir -p services/adapters/{events,weather,map}
mkdir -p services/business/{preference-matcher,transport-optimizer}
mkdir -p services/orchestrators/{event-discovery,logistics-commit}
mkdir -p bot
```

4. **Copy service files**
- Copy each service's `app.py` into its respective directory
- Copy `requirements.txt` to each service directory
- Copy `Dockerfile` to each service directory

5. **Build and run with Docker**
```bash
docker-compose up --build
```

### Running Locally (Without Docker)

1. **Install PostgreSQL**
```bash
# macOS
brew install postgresql@15
brew services start postgresql@15

# Ubuntu
sudo apt-get install postgresql-15
sudo systemctl start postgresql
```

2. **Create database**
```bash
psql -U postgres
CREATE DATABASE urbanpulse;
\q
```

3. **Install Python dependencies**
```bash
pip install -r requirements.txt
```

4. **Run each service in separate terminals**
```bash
# Terminal 1: User Profile Service
cd services/data/user-profile
python app.py

# Terminal 2: Itinerary Service
cd services/data/itinerary
python app.py

# Terminal 3: Events Adapter
cd services/adapters/events
export TICKETMASTER_API_KEY=your_key
python app.py

# ... (repeat for all services)

# Final Terminal: Telegram Bot
cd bot
export TELEGRAM_BOT_TOKEN=your_token
python app.py
```

## 🎯 Usage

### Telegram Bot Commands

- `/start` - Welcome message and help
- `/setup` - Set up your profile (preferences, home location)
- `/profile` - View your profile
- `/tonight [city]` - Discover events (default: New York)
- `/history` - View your event history

### Natural Language Queries

- "What's happening tonight?"
- "Show me events tonight"
- "What's on?"

### Committing to Events

1. Use `/tonight` to discover events
2. Reply with a number (1-5) to commit to that event
3. Receive logistics plan with transport recommendations

## 🔧 API Endpoints

### User Profile Service (5001)
- `POST /api/v1/profiles` - Create profile
- `GET /api/v1/profiles/{telegram_id}` - Get profile
- `PUT /api/v1/profiles/{telegram_id}` - Update profile
- `DELETE /api/v1/profiles/{telegram_id}` - Delete profile

### Itinerary Service (5002)
- `POST /api/v1/itineraries` - Create itinerary
- `GET /api/v1/itineraries/{telegram_id}` - Get user itineraries
- `GET /api/v1/itineraries/id/{itinerary_id}` - Get specific itinerary
- `DELETE /api/v1/itineraries/{itinerary_id}` - Delete itinerary

### Events Adapter (5003)
- `GET /api/v1/events/search?city=...&date=...` - Search events
- `GET /api/v1/events/{event_id}` - Get event details

### Weather Adapter (5004)
- `GET /api/v1/weather/current?city=...` - Current weather
- `GET /api/v1/weather/forecast?city=...&date=...` - Weather forecast

### Map Adapter (5005)
- `GET /api/v1/directions` - Get directions
- `GET /api/v1/distance` - Calculate distance
- `GET /api/v1/transit-options` - Get all transit options

### Preference Matcher (5006)
- `POST /api/v1/match` - Match events with preferences
- `POST /api/v1/filter-weather` - Filter events by weather

### Transport Optimizer (5007)
- `POST /api/v1/optimize` - Get optimal transport
- `POST /api/v1/recommendation` - Simple recommendation

### Event Discovery Orchestrator (5008)
- `POST /api/v1/discover-events` - Full event discovery workflow
- `POST /api/v1/quick-discover` - Quick discovery without profile

### Logistics Commit Orchestrator (5009)
- `POST /api/v1/commit-event` - Commit to event with logistics
- `GET /api/v1/itineraries/{telegram_id}` - Get user itineraries

## 🧪 Testing

### Test Individual Services

```bash
# Test User Profile Service
curl -X POST http://localhost:5001/api/v1/profiles \
  -H "Content-Type: application/json" \
  -d '{"telegram_id": "test123", "name": "Test User", "music_preferences": ["Jazz", "Rock"]}'

# Test Events Adapter
curl "http://localhost:5003/api/v1/events/search?city=New%20York&date=2025-12-26"

# Test Weather Adapter
curl "http://localhost:5004/api/v1/weather/current?city=New%20York"
```

### Test Orchestrators

```bash
# Test Event Discovery
curl -X POST http://localhost:5008/api/v1/discover-events \
  -H "Content-Type: application/json" \
  -d '{"telegram_id": "test123", "city": "New York"}'

# Test Logistics Commit
curl -X POST http://localhost:5009/api/v1/commit-event \
  -H "Content-Type: application/json" \
  -d '{"telegram_id": "test123", "event_id": "event_id_here"}'
```

## 📊 Monitoring

Each service has a `/health` endpoint:

```bash
curl http://localhost:5001/health
curl http://localhost:5002/health
# ... etc
```

## 🛠 Development

### Adding a New Service

1. Create service directory structure
2. Implement Flask app with REST endpoints
3. Add Dockerfile and requirements.txt
4. Update docker-compose.yml
5. Update orchestrators to call new service

### Coding Standards

- Use type hints in Python
- Follow REST API conventions
- Implement proper error handling
- Add logging for debugging
- Document all endpoints

## 📝 SOA Compliance

This project strictly follows the 4-layer SOA pattern:

✅ **Process Layer** - 2 orchestrators handling distinct workflows
✅ **Business Logic** - Domain logic separated from data access
✅ **Adapter Layer** - Standardized interface to external APIs
✅ **Data Layer** - Persistent storage with clear schemas
✅ **REST Communication** - All services use REST APIs with JSON
✅ **Service Independence** - Each service can run standalone
✅ **Containerization** - All services dockerized

## 🚧 Future Enhancements

- Add Redis for caching and session management
- Implement API Gateway for unified entry point
- Add authentication and rate limiting
- Include more event types (sports, arts, theater)
- Support multiple cities with geolocation
- Add real-time notifications for event updates
- Implement collaborative filtering for recommendations

## 📄 License

MIT License - For educational purposes

## 👥 Team

- Lewis Ndambiri
- Mehrab Fajar

---

**Note**: This is a university project demonstrating Service-Oriented Architecture principles. For production use, additional security, monitoring, and scaling considerations would be necessary.
