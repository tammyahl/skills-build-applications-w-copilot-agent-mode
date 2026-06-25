import mongoose from 'mongoose';
import { User } from '../models/User';
import { Team } from '../models/Team';
import { Activity } from '../models/Activity';
import { Leaderboard } from '../models/Leaderboard';
import { Workout } from '../models/Workout';

/**
 * Seed the octofit_db database with test data
 * 
 * This script:
 * 1. Connects to MongoDB
 * 2. Clears all existing data
 * 3. Creates sample users, teams, activities, leaderboard entries, and workouts
 * 4. Closes the database connection
 */

const MONGODB_URI = 'mongodb://localhost:27017/octofit_db';

async function seedDatabase() {
  try {
    console.log('🌱 Starting database seed...');
    console.log(`📦 Connecting to MongoDB at ${MONGODB_URI}`);

    // Connect to MongoDB
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    console.log('🗑️  Clearing existing data...');
    await User.deleteMany({});
    await Team.deleteMany({});
    await Activity.deleteMany({});
    await Leaderboard.deleteMany({});
    await Workout.deleteMany({});
    console.log('✅ Existing data cleared');

    // Create sample users
    console.log('👥 Creating sample users...');
    const users = await User.insertMany([
      {
        username: 'alex_fit',
        email: 'alex@example.com',
        password: 'hashedpassword123',
        firstName: 'Alex',
        lastName: 'Johnson',
      },
      {
        username: 'jordan_runner',
        email: 'jordan@example.com',
        password: 'hashedpassword456',
        firstName: 'Jordan',
        lastName: 'Smith',
      },
      {
        username: 'casey_cyclist',
        email: 'casey@example.com',
        password: 'hashedpassword789',
        firstName: 'Casey',
        lastName: 'Williams',
      },
      {
        username: 'morgan_yogi',
        email: 'morgan@example.com',
        password: 'hashedpassword101',
        firstName: 'Morgan',
        lastName: 'Brown',
      },
      {
        username: 'taylor_swimmer',
        email: 'taylor@example.com',
        password: 'hashedpassword202',
        firstName: 'Taylor',
        lastName: 'Davis',
      },
    ]);
    console.log(`✅ Created ${users.length} users`);

    // Create sample teams
    console.log('🏆 Creating sample teams...');
    const teams = await Team.insertMany([
      {
        name: 'Morning Runners',
        description: 'A group dedicated to early morning runs',
        leader: users[1]._id,
        members: [users[1]._id, users[4]._id],
      },
      {
        name: 'Fitness Fighters',
        description: 'Gym enthusiasts pushing their limits',
        leader: users[0]._id,
        members: [users[0]._id, users[2]._id],
      },
      {
        name: 'Wellness Warriors',
        description: 'Holistic health and fitness advocates',
        leader: users[3]._id,
        members: [users[3]._id],
      },
    ]);
    console.log(`✅ Created ${teams.length} teams`);

    // Create sample activities
    console.log('🏃 Creating sample activities...');
    const activities = await Activity.insertMany([
      {
        user: users[0]._id,
        type: 'gym',
        duration: 60,
        calories: 400,
        intensity: 'high',
        date: new Date(Date.now() - 1000 * 60 * 60 * 2),
        notes: 'Chest and triceps day',
      },
      {
        user: users[1]._id,
        type: 'running',
        duration: 45,
        distance: 8.5,
        calories: 600,
        intensity: 'high',
        date: new Date(Date.now() - 1000 * 60 * 60 * 24),
        notes: 'Morning 5K run',
      },
      {
        user: users[2]._id,
        type: 'cycling',
        duration: 90,
        distance: 35,
        calories: 700,
        intensity: 'medium',
        date: new Date(Date.now() - 1000 * 60 * 60 * 48),
        notes: 'Weekend bike ride',
      },
      {
        user: users[3]._id,
        type: 'yoga',
        duration: 60,
        calories: 150,
        intensity: 'low',
        date: new Date(Date.now() - 1000 * 60 * 60 * 72),
        notes: 'Relaxing vinyasa flow',
      },
      {
        user: users[4]._id,
        type: 'swimming',
        duration: 45,
        distance: 2.0,
        calories: 450,
        intensity: 'medium',
        date: new Date(Date.now() - 1000 * 60 * 60 * 24),
        notes: 'Lap swimming session',
      },
      {
        user: users[0]._id,
        type: 'walking',
        duration: 30,
        distance: 3.0,
        calories: 150,
        intensity: 'low',
        date: new Date(Date.now() - 1000 * 60 * 60 * 12),
        notes: 'Evening walk in the park',
      },
    ]);
    console.log(`✅ Created ${activities.length} activities`);

    // Create leaderboard entries
    console.log('📊 Creating leaderboard entries...');
    const leaderboardEntries = await Leaderboard.insertMany([
      {
        user: users[0]._id,
        team: teams[1]._id,
        score: 2500,
        rank: 1,
        totalActivities: 8,
        totalMinutes: 480,
      },
      {
        user: users[1]._id,
        team: teams[0]._id,
        score: 2300,
        rank: 2,
        totalActivities: 7,
        totalMinutes: 420,
      },
      {
        user: users[2]._id,
        team: teams[1]._id,
        score: 2100,
        rank: 3,
        totalActivities: 6,
        totalMinutes: 360,
      },
      {
        user: users[3]._id,
        team: teams[2]._id,
        score: 1800,
        rank: 4,
        totalActivities: 5,
        totalMinutes: 300,
      },
      {
        user: users[4]._id,
        team: teams[0]._id,
        score: 1600,
        rank: 5,
        totalActivities: 4,
        totalMinutes: 240,
      },
    ]);
    console.log(`✅ Created ${leaderboardEntries.length} leaderboard entries`);

    // Create sample workouts
    console.log('💪 Creating sample workouts...');
    const workouts = await Workout.insertMany([
      {
        name: 'Beginner Strength Training',
        description: 'Perfect for those starting their fitness journey',
        type: 'strength',
        difficulty: 'beginner',
        duration: 45,
        exercises: ['Push-ups', 'Squats', 'Lunges', 'Planks'],
        targetMuscles: ['chest', 'legs', 'core'],
        isTemplate: true,
      },
      {
        name: 'HIIT Cardio Blast',
        description: 'High intensity interval training for maximum calorie burn',
        type: 'cardio',
        difficulty: 'intermediate',
        duration: 30,
        exercises: ['Burpees', 'Jump Squats', 'Mountain Climbers', 'High Knees'],
        targetMuscles: ['full body'],
        isTemplate: true,
      },
      {
        name: 'Morning Yoga Flow',
        description: 'Gentle stretching and breathing exercises for flexibility',
        type: 'flexibility',
        difficulty: 'beginner',
        duration: 30,
        exercises: ['Child Pose', 'Cat-Cow', 'Downward Dog', 'Warrior Pose'],
        targetMuscles: ['full body'],
        isTemplate: true,
      },
      {
        name: 'Advanced Lower Body',
        description: 'Challenging leg workout for experienced lifters',
        type: 'strength',
        difficulty: 'advanced',
        duration: 60,
        exercises: ['Squats', 'Deadlifts', 'Leg Press', 'Leg Curls', 'Calf Raises'],
        targetMuscles: ['quads', 'hamstrings', 'glutes', 'calves'],
        isTemplate: true,
      },
      {
        name: 'Balance and Stability',
        description: 'Improve core strength and balance',
        type: 'balance',
        difficulty: 'intermediate',
        duration: 40,
        exercises: ['Single Leg Stand', 'Bosu Ball Squats', 'Core Balance', 'Stability Ball Push-ups'],
        targetMuscles: ['core', 'stabilizers'],
        isTemplate: true,
      },
    ]);
    console.log(`✅ Created ${workouts.length} workout templates`);

    console.log('\n🎉 Database seeding completed successfully!');
    console.log('📊 Summary:');
    console.log(`   - Users: ${users.length}`);
    console.log(`   - Teams: ${teams.length}`);
    console.log(`   - Activities: ${activities.length}`);
    console.log(`   - Leaderboard Entries: ${leaderboardEntries.length}`);
    console.log(`   - Workouts: ${workouts.length}`);

    // Close connection
    await mongoose.connection.close();
    console.log('✅ Database connection closed');
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

// Run the seed
seedDatabase();
