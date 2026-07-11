import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function seedAdmin() {
  try {
    console.log('🌱 Starting admin seeding...')

    console.log('🔐 Hashing password...')
    const hashedPassword = await bcrypt.hash('Admin@69', 12)

    console.log('🔄 Upserting admin...')
    const admin = await prisma.admin.upsert({
      where: { adminId: 'bhogobanadmin2003' },
      update: {
        email: 'maitysubhobrata18@gmail.com',
        password: hashedPassword,
        firstName: 'Admin',
        lastName: 'User',
        phoneNumber: '+91-9876543210',
        address: '123 Admin Street, Kolkata',
        city: 'Kolkata',
        state: 'West Bengal',
        zipCode: '700001',
        country: 'India',
        bio: 'Main administrator of ROT KIT e-commerce platform',
        department: 'Management',
        permissions: ['all'],
        isActive: true,
      },
      create: {
        adminId: 'bhogobanadmin2003',
        email: 'maitysubhobrata18@gmail.com',
        password: hashedPassword,
        firstName: 'Admin',
        lastName: 'User',
        phoneNumber: '+91-9876543210',
        address: '123 Admin Street, Kolkata',
        city: 'Kolkata',
        state: 'West Bengal',
        zipCode: '700001',
        country: 'India',
        bio: 'Main administrator of ROT KIT e-commerce platform',
        department: 'Management',
        permissions: ['all'],
        isActive: true,
      },
      select: { id: true, adminId: true, email: true, firstName: true, lastName: true }
    })

    console.log('✅ Admin seeded successfully!')
    console.log('🆔 Admin ID:', admin.adminId)
    console.log('📧 Email:', admin.email)
    console.log('🔑 Password: Admin@69')
    console.log('🔢 Database ID:', admin.id)

    return admin
  } catch (error) {
    console.error('❌ Error seeding admin:', error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

seedAdmin()
  .then(() => {
    console.log('🎉 Admin seeding completed!')
    process.exit(0)
  })
  .catch((error) => {
    console.error('💥 Admin seeding failed:', error)
    process.exit(1)
  })
